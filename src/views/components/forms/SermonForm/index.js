import React from 'react';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import youtube_parser from '../../../../utils/youtube_parser';
import Loading from '../../Loading';

const SermonForm = (props) => {
  const [values, setValues] = React.useState(props.initialValues);
  const [errors, setErrors] = React.useState({});
  const [showAudioUpload, toggleShowAudioUpload] = React.useState(!(props.initialValues && props.initialValues.audio_file && Object.keys(props.initialValues.audio_file).length > 0));

	const handleChange = (e) => {
		e.persist();
		setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  }

	const handleDateChange = (date) => {
		setValues((prevValues) => ({ ...prevValues, published_on: date }));
  }

  const onFileChange = e => {
    e.preventDefault();
    e.persist();
    if (e.target.files[0]) {
      let nameArray = e.target.files[0].name.split('.');
      const extension = nameArray.pop().toLowerCase();
      const name = nameArray.join('.');

      var reader = new FileReader();
      reader.onload = () => {
        setValues((prevValues) => ({...prevValues, [e.target.name]: {
          name: name,
          extension: extension,
          data: reader.result
        }}));
      }

      reader.readAsDataURL(e.target.files[0])
    } else {
      setValues((prevValues) => ({...prevValues, [e.target.name]: {}}));
    }
  }
  
  const handleLinkBlur = (e) => {
    e.persist();
    
    const parsed = youtube_parser(e.target.value);
    if (parsed) {
      setValues((prevValues) => ({...prevValues, [e.target.name]: parsed}));
    }
  }

  const resetForm = (e) => {
    e.preventDefault();
    setValues(props.initialValues);
  }

  const validate = (values) => {
    let newErrors = {};
    if (!values.youtube_id) {
      newErrors.youtube_id = "Required";
    }

    return newErrors;
  }

  const submit = (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {

      props.submit({ 
        ...values, 
        published_on: values.published_on ? values.published_on.format('YYYY-MM-DD HH:mm:ss') : ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  }
  
  return (
    <form onSubmit={submit}>
      <Loading show={props.loading} />
      <div className="row">
        <div className="col-2 col-form-label" style={{ textAlign: 'right' }}>
          <label>Title</label>
        </div>
        <input
          name="title"
          className="form-control col-4"
          type="text" 
          value={values.title}
          onChange={handleChange}
        />
      </div>
      <div className="row" style={{ marginTop: 25 }}>
        <div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
          <label>Publish Date (May be a past date)</label>
        </div>
        <div className="col-3">
          <KeyboardDateTimePicker
            name="published_on"
            variant="inline"
            ampm={true}
            value={values.published_on}
            onChange={handleDateChange}
            onError={console.log}
            format="MM/DD/YYYY hh:mm a"
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: 25 }}>
        <div className="col-2 col-form-label" style={{ textAlign: 'right' }}>
          <label>Description</label>
        </div>
        <textarea
          name="description"
          className="form-control col-8"
          value={values.description}
          onChange={handleChange}
        />
      </div>
      <div className="row" style={{ marginTop: 25 }}>
        <div className="col-2 col-form-label" style={{ textAlign: 'right' }}>
          <label>Video Type</label>
        </div>
        <select
          name="video_type"
          className="form-control col-2"
          value={values.video_type}
          onChange={handleChange}
        >
          <option value="youtube">YouTube</option>
          <option value="local" disabled>File Upload</option>
        </select>
        <div className="col-2 col-form-label" style={{ textAlign: 'right' }}>
          <label>Link/Video ID</label>
        </div>
        <div className="col-4">
          <input
            name="youtube_id"
            className="form-control"
            type="text"
            value={values.youtube_id}
            onChange={handleChange}
            onBlur={handleLinkBlur}
          />
          {errors.youtube_id ?
            <div style={{ color: 'red' }}>{errors.youtube_id}</div>
          : null}
        </div>
      </div>
      <div className="row" style={{ marginTop: 25 }}>
        <div className="col-2 col-form-label" style={{ textAlign: 'right' }}>
          <label>Audio File</label>
        </div>
        {props.initialValues && props.initialValues.audio_file && Object.keys(props.initialValues.audio_file).length > 0 ?
          <div>
            <audio controls>
              <source 
                src={props.initialValues.audio_file.public_path} 
                type="audio/mp3" 
              />
            Your browser does not support the audio element.
            </audio>
            <button
              className="btn btn-secondary" 
              onClick={toggleShowAudioUpload}
              type="button"
              style={{ marginLeft: 15, marginTop: -50 }}
            >
              Use different file
            </button>
          </div>
        : null}
        {showAudioUpload ?
          <div className="col-5">
            <input
              name="audio_file"
              className="form-control"
              type="file"
              accept="audio/*"
              onChange={onFileChange}
            />
          </div>
        : null}
      </div>
      <div style={{ textAlign: 'right', marginTop: 15 }}>
        <button 
          className="btn" 
          onClick={resetForm}
          type="button"
          style={{ marginRight: 15 }}
        >
          Reset
        </button>
        <button 
          className="btn btn-primary" 
          type="submit"
          style={{ marginRight: 15 }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SermonForm;