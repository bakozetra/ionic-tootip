import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}
  setDelay () {
   const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam, metus non cursus tristique, ligula orci cursus dui, in suscipit libero turpis sed dui. Fusce arcu dolor, fermentum consequat arcu vel, efficitur egestas ex. Integer gravida scelerisque dolor, at suscipit arcu fermentum sed. Donec vitae nisi eget arcu imperdiet sollicitudin. Vivamus facilisis massa non mi tincidunt dapibus in quis diam. In hac habitasse platea dictumst. Etiam condimentum augue at dignissim elementum. Morbi sit amet urna massa. Vivamus vel dolor ex. Nunc pulvinar nisl sed lorem tempus, id tristique tortor gravida. Donec ac purus diam. Pellentesque gravida sem et tempor sodales.

   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec diam venenatis, efficitur lorem sit amet, cursus libero. Vestibulum vel elit mollis, elementum ipsum nec, scelerisque dui. Nulla bibendum blandit imperdiet. Etiam lobortis nisi tellus, non rutrum nulla elementum vitae. Donec sit amet vestibulum velit. Nullam sollicitudin et metus quis facilisis. Curabitur consectetur in dui ac pulvinar. In ac mauris enim. Vivamus urna ante, egestas accumsan nulla non, dictum imperdiet erat. Donec ligula eros, porta mattis velit vitae, consectetur scelerisque odio. Sed felis magna, efficitur id erat eget, tincidunt mattis sem. Praesent eu bibendum dui. Cras quam orci, molestie in mollis in, blandit vel tellus. In vel magna interdum, malesuada neque at, lacinia sapien.
   
   Sed nec massa iaculis, varius ipsum sed, fermentum urna. Ut in sagittis sem. Aliquam nec finibus metus, a malesuada nulla. Curabitur rutrum iaculis arcu non facilisis. Nulla sit amet blandit mauris. Maecenas at turpis sit amet ante accumsan imperdiet nec sit amet diam. Phasellus auctor volutpat arcu et ultrices. Nullam eu magna dapibus lectus feugiat sodales.
   
   Proin a justo suscipit dui viverra vestibulum. Suspendisse potenti. Curabitur bibendum dapibus felis ac consectetur. Nulla porta pharetra odio, eu blandit purus volutpat non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet fringilla magna, eget consequat tortor. Ut molestie tincidunt leo non vestibulum. Quisque quis ipsum et risus consequat tempor vitae eu odio. Donec ligula ipsum, mattis sit amet risus ut, aliquam blandit erat. Suspendisse pretium purus dui, non scelerisque lacus dapibus scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam porttitor, lectus quis tempus eleifend, felis mauris placerat lorem, ac lacinia lacus sem ut risus. Sed pellentesque lectus vitae velit tincidunt porta. Proin accumsan, nibh nec semper varius, tellus sapien faucibus massa, non congue sem metus sed risus. Sed nec orci eget ex convallis ultrices. Mauris ultrices fermentum diam eget tempus.
   
   Praesent pulvinar dignissim congue. Etiam accumsan augue sit amet nunc congue, quis cursus sem dignissim. Proin quis purus sem. Aliquam erat volutpat. Donec imperdiet at leo non gravida. Suspendisse imperdiet libero nec nibh dignissim tincidunt. Praesent in urna faucibus mauris pulvinar sagittis vitae eu augue. Integer pretium erat ac elit rutrum, non ultricies nulla rutrum. Nunc convallis dui enim, at vehicula neque congue nec. Sed venenatis, dolor ut fringilla dignissim, sapien erat consequat lacus, vitae aliquam ipsum elit vitae turpis. Nulla rhoncus ligula sagittis turpis auctor, non sodales elit congue. Etiam ut quam posuere, volutpat diam ut, accumsan quam. Sed non orci quam.
   `
   return data
  }
  
}
