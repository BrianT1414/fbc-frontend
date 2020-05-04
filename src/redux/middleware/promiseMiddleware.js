/**
 * If the action contains a key called `promise`, the middleware will assume the promise is a function that contains an ajax request and call it.
 * 
 */
const promiseMiddleware = (store) => (next) => (action) => {
  const { promise, types, props, ...rest } = action;

  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  return promise().then(r => {
    if (!r.ok) {
      try {
        const failedResp = Promise.resolve(r.json());
        failedResp.then(payload => {
          next({ ...rest, status: r.status, ok: false, payload, type: FAILURE });
        });
      } catch (error) {
        next({ ...rest, ok: false, error, type: FAILURE });
      }
    } else {
      try {
        r.json().then(payload => {
          next({ ...rest, status: r.status, ok: r.ok, payload, type: SUCCESS });
        });
      } catch (error) {
        next({ ...rest, ok: false, error, type: FAILURE });
      }
    }
  })
    .catch(error => {
      next({ ...rest, ok: false, error, type: FAILURE });
    });
};

export default promiseMiddleware;


