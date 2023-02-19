import styles from "./ProjectModels.module.scss";
import React, { useState } from 'react'
import Modal from 'react-modal';
import Image from 'next/image';


import { Container, Grid, Box } from "@mui/material";

function myModel (model) {
  let myModel = JSON.parse(model);
  if(myModel.blocks[0].data.html) {
    console.log(myModel.blocks[0].data.html);
    return myModel.blocks[0].data.html;
  }
}

const ProjectModels = ({ items, image }) => {
  
  const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
        //  width: '50vw',
         //height: '50vh',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }
   const customStyles2 = {
    content: {
      height: '100%'
    }
  }

  let myImage = 'https://' + image[0]?.image.data.attributes.url;
  let myImageCheck = image[0]?.image.data.attributes.url;
  if (myImageCheck === undefined) {
    return null;
  } else {
    return (
      <Box className={styles.projectModels}>
        <Container>
          <button style={{margin:'0 auto',marginBottom: '-50px', display: 'block'}} class="model-btn" onClick={() => setIsOpen(true)}>Open 3d scan territory</button>
          {/* <img width="100%" src={myImage} onClick={() => setIsOpen(true)} ></img> */}
          <Image
            src={myImage}
            alt="3D Model"
            //width={1000}
            onClick={() => setIsOpen(true)}
            //height={500}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
              {items &&
              items.map((item) => (
                <Modal key={item.id} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                  <div id="mymodal-wrapper" dangerouslySetInnerHTML={{__html: myModel(item.value)}}>
                    {/* {item.value.block?.data.html} */}
                    {/* {console.log(JSON.parse(item.value))} */}
                    {/* {console.log('123:',myModel(item.value))} */}
                    
                  </div>
                </Modal>
              ))}
              {/* <button onClick={() => setIsOpen(false)}>Close Modal</button> */}
          
                
        </Container>
      </Box>
    );
  }
};

export default ProjectModels;
