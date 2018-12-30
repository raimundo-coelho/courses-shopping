import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'courses', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'course', loadChildren: './pages/course-detail/course-detail.module#CourseDetailPageModule' },
  { path: 'order', loadChildren: './pages/order/order.module#OrderPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'manager', loadChildren: './pages/manager/manager.module#ManagerPageModule' },
  { path: 'certificate', loadChildren: './pages/certificate/certificate.module#CertificatePageModule' },
  { path: 'forum', loadChildren: './pages/forum/forum.module#ForumPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
