import React from 'react';
import YouTube from '../../components/YouTube';
import AudioOptions from '../../components/AudioOptions';

const GoodFriday = (props) => {
  return (
    <div>
      <h3 style={{ marginLeft: 15 }}>Harmony of the Good Friday Account</h3> 
      <div style={{ margin: 15, maxWidth: 600 }}>
        <YouTube url="https://www.youtube.com/embed/nLStHrHKMbQ" />
        <AudioOptions audio="/assets/FBC_2020-04-10_(Good_Friday_Reading).mp3" />
        <div style={{ margin: 10 }}>
          <a href="/assets/Harmony_of_the_Good_Friday_Account.pdf" download>Download PDF of the Scripture Reading</a>
        </div>
      </div>
      <hr/>
      <div style={{ maxHeight: 500, overflowY: 'scroll', margin: 25 }}>
        {ReadingText}
      </div>
    </div>
  );
}

export default GoodFriday;

const paragraph = { textIndent: 25 }
const ReadingText = <div>
  <h5><b>Jesus before Annas and Caiaphas</b></h5>

  <p style={paragraph}>Then the detachment of troops and the captain and the officers of the Jews arrested Jesus and bound Him. And they led Him away to Annas first, for he was the father-in-law of Caiaphas who was high priest that year. Now it was Caiaphas who advised the Jews that it was expedient that one man should die for the people. 
  The high priest then asked Jesus about His disciples and His doctrine. Jesus answered him, “I spoke openly to the world. I always taught in synagogues and in the temple, where the Jews always meet, and in secret I have said nothing. Why do you ask Me? Ask those who have heard Me what I said to them. Indeed they know what I said.” 
  And when He had said these things, one of the officers who stood by struck Jesus with the palm of his hand, saying, “Do You answer the high priest like that?” 
  Jesus answered him, “If I have spoken evil, bear witness of the evil; but if well, why do you strike Me?” 
  Then Annas sent Him bound to Caiaphas the high priest. And those who had laid hold of Jesus led Him away to Caiaphas the high priest, where the scribes and the elders were assembled.</p>

  <p style={paragraph}>Now the chief priests, the elders, and all the council sought false testimony against Jesus to put Him to death, but found none. Even though many false witnesses came forward, their testimonies did not agree. But at last two false witnesses came forward and said, “We heard Him say, ‘I will destroy this temple made with hands, and within three days I will build another made without hands.’” But not even then did their testimony agree. 
  And the high priest stood up in the midst and asked Jesus, saying, “Do You answer nothing? What is it these men testify against You?” But Jesus kept silent and answered nothing. And the high priest answered and said to Him, “I put You under oath by the living God: Tell us if You are the Christ, the Son of God!” 
  Jesus said to him, “It is as you said. Nevertheless, I say to you, hereafter you will see the Son of Man sitting at the right hand of the Power, and coming on the clouds of heaven.” 
  Then the high priest tore his clothes, saying, “He has spoken blasphemy! What further need do we have of witnesses? Look, now you have heard His blasphemy! What do you think?” 
  They answered and said, “He is deserving of death.” Then they spat in His face. 
  Then some began to spit on Him, and to blindfold Him, and to beat Him, and to say to Him, “Prophesy! Who is the one who struck you?” And the officers struck Him with the palms of their hands.</p> 

  <h5><b>Jesus before Pontus Pilate</b></h5>
  <p style={paragraph}>Immediately, in the early morning, the chief priests held a consultation with the elders and scribes and the whole council; and they plotted against Jesus to put Him to death. 
  Then the whole multitude of them arose and lead Jesus from Caiaphas to the Praetorium and delivered Him to Pilate the governor. But they themselves did not go into the Praetorium, lest they should be defiled, but that they might eat the Passover. Pilate then went out to them and said, “What accusation do you bring against this Man?” 
  They answered and said to him, “If He were not an evildoer, we would not have delivered Him up to you.” And they began to accuse Him, saying, “We found this fellow perverting the nation, and forbidding to pay taxes to Caesar, saying that He Himself is Christ, a King.” 
  Then Pilate said to them, “You take Him and judge Him according to your law.” 
  Therefore the Jews said to him, “It is not lawful for us to put anyone to death,” that the saying of Jesus might be fulfilled which He spoke, signifying by what death He would die. 
  Then Pilate entered the Praetorium again and Jesus stood before the governor. And Pilate asked Him, saying, “Are You the King of the Jews?”  
  Jesus answered him, “Are you speaking for yourself about this, or did others tell you this concerning Me?” 
  Pilate answered, “Am I a Jew? Your own nation and the chief priests have delivered You to me. What have you done?” 
  Jesus answered, “My kingdom is not of this world. If My kingdom were of this world, My servants would fight, so that I should not be delivered to the Jews; but now My kingdom is not from here.” 
  Pilate therefore said to Him, “Are you the king then?” 
  Jesus answered and said to him, “It is as you say. You say rightly that I am a king. For this cause I was born, and for this cause I have come into the world, that I should bear witness to the truth. Everyone who is of the truth hears My voice.” 
  Pilate said to Him, “What is truth?” And when he had said this, he went out again to the Jews. And while Jesus was being accused by the chief priests and elders, He answered nothing. 
  Then Pilate asked Him again, saying, “Do You answer nothing? See how many things they testify against You!” But Jesus still answered nothing, so that Pilate marveled greatly. 
  So Pilate said to the chief priests and the crowd, “I find no fault in this Man at all.”  
  But they were the more fierce, saying, “He stirs up the people, teaching throughout all Judea, beginning from Galilee to this place.”
  When Pilate heard of Galilee, he asked if the Man were a Galilean. And as soon as he knew that He belonged to Herod’s jurisdiction, he sent Him to Herod, who was also in Jerusalem at that time.</p> 

  <h5><b>Jesus before Herod</b></h5>
  <p style={paragraph}>Now when Herod saw Jesus, he was exceedingly glad; for he had desired for a long time to see Him, because he had heard many things about Him, and he hoped to see some miracle done by Him. Then he questioned Him with many words, but He answered him nothing. And the chief priests and scribes stood and vehemently accused Him. Then Herod, with his men of war, treated Him with contempt and mocked Him, arrayed Him in a gorgeous robe, and sent Him back to Pilate.</p> 

  <h5><b>Jesus before Pontius Pilate a second time</b></h5>

  <p style={paragraph}>Now at the feast Pilate, the governor, was accustomed to releasing one prisoner to the multitude, whomever they requested.  And there was one, a notorious prisoner, named Barabbas, who was chained with his fellow rebels; they had committed murder in the rebellion. 
  Then Pilate, when he had called together the chief priests, the rulers, and the people, said to them, “You have brought this Man to me, as one who misleads the people. And indeed, having examined Him in your presence, I have found no fault in this Man concerning those things of which you accuse Him; no, neither did Herod, for I sent you back to him; and indeed nothing deserving of death has been done by Him. I will therefore chastise Him and release Him.” 
  While he was sitting on the judgment seat, his wife sent to him, saying, “Have nothing to do with that just Man, for I have suffered many things today in a dream because of Him.” 
  Then the multitude, crying aloud, began to ask him to do just as he had always done for them. Pilate answered them saying, “Whom do you want me to release to you? Barabbas, or Jesus who is called Christ, the King of the Jews?” For he knew that they had handed Him over because of envy. 
  But the chief priests stirred up the crowd and persuaded them so that Pilate should rather release Barabbas to them and destroy Jesus. And they all cried out at once, saying, “Away with this Man, and release to us Barabbas!” 
  Therefore Pilate, wishing to release Jesus, again answered and said to them, “Which of the two do you want me to release to you?” 
  They said, “Not this Man, but Barabbas!” 
  Pilate answered and said to them again, “What then shall I do with Jesus who is called the Christ, King of the Jews?” 
  And they cried out saying, “Crucify Him, crucify Him!” 
  And the governor said to them a third time, “Why, what evil has He done? I have found no reason for death in Him. I will therefore chastise Him and let Him go.”</p> 

  <p style={paragraph}>Therefore, when the chief priests and officers saw Him, they cried out, saying, “Crucify Him, crucify Him!” 
  Pilate said to them, “You take Him and crucify Him, for I find no fault in Him.” 
  The Jews answered him, “We have a law, and according to our law He ought to die, because He made Himself the Son of God.” 
  Therefore, when Pilate heard that saying, he was the more afraid, and went again into the Praetorium, and said to Jesus, “Where are You from?” But Jesus gave him no answer. 
  Then Pilate said to Him, “Are You not speaking to me? Do You not know that I have power to crucify You, and power to release You?” 
  Jesus answered, “You could have no power at all against Me unless it had been given you from above. Therefore the one who delivered Me to you has the greater sin.” 
  From then on Pilate sought to release Him, but the Jews cried out, saying, “If you let this Man go, you are not Caesar’s friend. Whoever makes himself a king speaks against Caesar.” 
  When Pilate therefore heard that saying, he brought Jesus out and sat down in the judgment seat in a place that is called The Pavement, but in Hebrew, Gabbatha. Now it was the Preparation Day of the Passover, and about the sixth hour. And he said to the Jews, “Behold your King!” 
  But they cried out, “Away with Him, away with Him! Crucify Him!” 
  Pilate said to them, “Shall I crucify your King?” 
  The chief priests answered, “We have no king but Caesar!” 
  When Pilate saw that he could not prevail, and wanting to gratify the crowd, he took water and washed his hands before the multitude, saying, “I am innocent of the blood of this just Person. You see to it.” 
  And all the people answered and said, “His blood be on us and on our children.” 
  So Pilate gave sentence that it should be as they requested. And he released Barabbas to them, who for rebellion and murder had been thrown into prison; and when he had scourged Jesus, he delivered Him to be crucified.</p>


  <h5><b>Jesus is beaten</b></h5>
  <p style={paragraph}>Then the soldiers of the governor took Jesus into the Praetorium and gathered the whole garrison around Him. And they stripped Him and put a scarlet robe on Him.  When they had twisted a crown of thorns, they put it on His head, and a reed in His right hand.  And began to salute and mock Him, saying, “Hail, King of the Jews!”  Then they spat on Him, and took the reed and struck Him on the head.  And bowing the knee, they worshiped Him.  And when they had mocked Him, they took the robe off Him, put His own clothes on Him, and led Him out to crucify Him.</p>

  <h5><b>Jesus is lead to Golgotha</b></h5>
  <p style={paragraph}>Then they compelled a certain man, Simon a Cyrenian, the father of Alexander and Rufus, as he was coming out of the country and passing by, to bear His cross. 
  And a great multitude of the people followed Him, and women who also mourned and lamented Him. But Jesus, turning to them, said, “Daughters of Jerusalem, do not weep for Me, but weep for yourselves and for your children. For indeed the days are coming in which they will say, ‘Blessed are the barren, wombs that never bore, and breasts which never nursed!’ Then they will begin to say to the mountains, ‘Fall on us!’ and to the hills, ‘Cover us!’ For if they do these things in the green wood, what will be done in the dry?” 
  There were also two others, criminals, led with Him to be put to death.</p>  

  <h5><b>Jesus is crucified</b></h5>
  <p style={paragraph}>And when they had come to a place called Golgotha, that is to say, “Place of a Skull, there they crucified Him, and two others with Him, one on either side, and Jesus in the center.  So the Scripture was fulfilled which says, “And He was numbered with the transgressors.” Then Jesus said, “Father, forgive them, for they do not know what they do.”
  Now Pilate wrote a title and put it on the cross. And the writing was: 
  JESUS OF NAZARETH, THE KING OF THE JEWS
  Then many of the Jews read this title, for the place where Jesus was crucified was near the city; and it was written in Hebrew, Greek, and Latin. 
  Therefore the chief priests of the Jews said to Pilate, “Do not write, ‘The King of the Jews,’ but, ‘He said, “I am the King of the Jews.”’” 
  Pilate answered, “What I have written, I have written.”</p>

  <h5><b>The soldiers divide His clothes</b></h5>
  <p style={paragraph}>Then the soldiers, when they had crucified Jesus, took His garments and made four parts, to each soldier a part, and also the tunic. Now the tunic was without seam, woven from the top in one piece. They said therefore among themselves, “Let us not tear it, but cast lots for it, whose it shall be,” that the Scripture might be fulfilled which says: “They divided My garments among them, And for My clothing they cast lots.” 
  Therefore the soldiers did these things.</p>

  <h5><b>The soldiers watch and mock</b></h5>
  <p style={paragraph}>Sitting down, they kept watch over Him there. And the people stood looking on.
  And those who passed by blasphemed Him, wagging their heads and saying, “Aha! You who destroy the temple and build it in three days, save Yourself, and come down from the cross!” 
  Likewise the chief priest also, mocking with the scribes and elders, said, “He saved others; let Him save Himself if He is the Christ, the chosen of God. Let the Christ, the King of Israel, descend now from the cross, that we may see and believe. He trusted in God; let Him deliver Him now if He will have Him; for He said, ‘I am the Son of God.’” 
  The soldiers also mocked Him, coming and offering Him sour wine, and saying, “If you are the King of the Jews, save Yourself.” 
  Even the robbers who were crucified with Him reviled Him with the same thing.</p> 

  <h5><b>Thieves on both sides speak</b></h5>
  <p style={paragraph}>Then one of the criminals who were hanged blasphemed Him, saying, “If You are the Christ, save Yourself and us.” But the other, answering, rebuked him, saying, “Do you not even fear God, seeing you are under the same condemnation? And we indeed justly, for we receive the due reward of our deeds; but this Man has done nothing wrong.” Then he said to Jesus, “Lord, remember me when You come into Your kingdom.” 
  And Jesus said to him, “Assuredly, I say to you, today you will be with Me in Paradise.”</p> 

  <h5><b>Jesus speaks to His mother and John</b></h5>
  <p style={paragraph}>Now there stood by the cross of Jesus His mother, and His mother’s sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus therefore saw His mother, and the disciple whom He loved standing by, He said to His mother, “Woman, behold your son!” Then He said to the disciple, “Behold your mother!” And from that hour that disciple took her to his own home.</p> 

  <h5><b>Three-hour darkness</b></h5>
  <p style={paragraph}>Now it was about the sixth hour, and there was darkness over all the earth until the ninth hour.</p>

  <h5><b>Jesus speaks</b></h5>
  <p style={paragraph}>And about the ninth hour Jesus cried out with a loud voice saying, “Eli, Eli, lama sabachthani?” which is translated, “My God, My God, why have You forsaken Me?” 
  Some of those who stood there, when they heard that, said, “This Man is calling for Elijah!” Immediately one of them ran and took a sponge, filled it with sour wine and put in on a reed, and offered it to Him to drink.
  The rest said, “Let Him alone; let us see if Elijah will come to save Him.” 
  After this, Jesus, knowing that all things were now accomplished, that the Scripture might be fulfilled, said, “I thirst!” Now a vessel full of sour wine was sitting there; and they filled a sponge with sour wine, put it on hyssop, and put it to His mouth. So when Jesus had received the sour wine, He said, “It is finished!” And when Jesus had cried out with a loud voice, He said, “Father ‘into Your hands I commit My spirit.’” Having said this, He breathed His last. And bowing His head, He gave up His spirit.</p>

  <h5><b>Earthquakes, Temple curtain torn</b></h5>
  <p style={paragraph}>Then, behold, the veil of the temple was torn in two from top to bottom; and the earth quaked, and the rocks were split, and the graves were opened; and many bodies of the saints who had fallen asleep were raised. 
  So when the centurion and those with him, who were guarding Jesus, saw the earthquake and the things that had happened, they feared greatly, saying, “Truly this Man was the Son of God!”
  And the whole crowd who came together to that sight, seeing what had been done, beat their breasts and returned.  But all His acquaintances, and the women who followed Him from Galilee, stood at a distance, watching these things.</p>

  <h5><b>Jesus’ side is pierced</b></h5>
  <p style={paragraph}>Therefore, because it was the Preparation Day, that the bodies should not remain on the cross on the Sabbath (for that Sabbath was a high day), the Jews asked Pilate that their legs might be broken, and that they might be taken away. 
  Then the soldiers came and broke the legs of the first and of the other who was crucified with Him. But when they came to Jesus and saw that He was already dead, they did not break His legs. But one of the soldiers pierced His side with a spear, and immediately blood and water came out. 
  And he who has seen has testified, and his testimony is true; and he knows that he is telling the truth, so that you may believe. For these things were done that the Scripture should be fulfilled, “Not one of His bones shall be broken.” And again another Scripture says, “They shall look on Him whom they pierced.”</p> 
  <h5><b>Jesus buried in borrowed tomb</b></h5>
  <p style={paragraph}>Now when evening had come, because it was the Preparation Day, that is the day before the Sabbath, Joseph of Arimathea, a prominent council member, being a disciple of Jesus, but secretly, for fear of the Jews, asked Pilate that he might take away the body of Jesus. 
  Pilate marveled that He was already dead; and summoning the centurion, he asked him if He had been dead for some time. So when he found out from the centurion, he granted the body to Joseph. 
  So he came and took the body of Jesus. And Nicodemus, who at first came to Jesus by night, also came, bringing a mixture of myrrh and aloes, about a hundred pounds. 
  Then they took the body of Jesus, and bound it in strips of linen with spices, as the custom of the Jews is to bury. Now in the place where He was crucified there was a garden, and in the garden a new tomb in which no one had yet been laid.
  And there they laid Him in a tomb which had been hewn out of the rock, and rolled a stone against the door of the tomb, and departed.</p>
</div>