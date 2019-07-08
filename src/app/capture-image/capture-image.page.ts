
import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';
 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
 
@Component({
  selector: 'app-capture-image',
    templateUrl: './capture-image.page.html',
    styleUrls: ['./capture-image.page.scss'],
  })
  
export class CaptureImagePage implements OnInit {
 
  capturedSnapURL:string;
 
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
 
  constructor(private camera: Camera,private router:Router,) { }
  ngOnInit() {
      }
      uploadImage(){
        this.router.navigate(['/upload-image']);
      }
  back(){
        this.router.navigate(['/']);
      }
  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
      // if(this.capturedSnapURL==""){
      //   console.log(" ");
      // }else{
      //   console.log(this.capturedSnapURL);
      // }
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }
 
 
}
