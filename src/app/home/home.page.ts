import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // navigate: any;

  ngOnInit() {
  }
  constructor(private router:Router) {}
  GoToCapture(){
    this.router.navigate(['/capture-image']);
  }
  GoToUploadImage(){
    this.router.navigate(['/upload-image']);
  }

}

//home.page.ts
// import { Component } from '@angular/core';
// import {Router} from '@angular/router';
 
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
 
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
 
//   capturedSnapURL:string;
 
//   cameraOptions: CameraOptions = {
//     quality: 20,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }
 
//   constructor(private camera: Camera,private router:Router,) { }
//   GoToCapture(){
//         this.router.navigate(['/capture-image']);
//       }
//       GoToUploadImage(){
//         this.router.navigate(['/upload-image']);
//       }
//   takeSnap() {
//     this.camera.getPicture(this.cameraOptions).then((imageData) => {
//       // this.camera.DestinationType.FILE_URI gives file URI saved in local
//       // this.camera.DestinationType.DATA_URL gives base64 URI
      
//       let base64Image = 'data:image/jpeg;base64,' + imageData;
//       this.capturedSnapURL = base64Image;
//     }, (err) => {
      
//       console.log(err);
//       // Handle error
//     });
//   }
 
 
// }