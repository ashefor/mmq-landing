import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home | Money Marque',
      description: 'Welcome to Money Marque'
    }
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule),
    data: {
      title: 'Personal Loans | Money Marque',
      description: 'Money Marque Personal Loans'
    }
  },
  {
    path: 'investments',
    loadChildren: () => import('./investments/investments.module').then(m => m.InvestmentsModule),
    data: {
      title: 'Investments | Money Marque',
      description: 'Money Marque Investments'
    }
  },
  {
    path: 'our-company',
    loadChildren: () => import('./about-us/our-company/our-company.module').then(m => m.OurCompanyModule),
    data: {
      title: 'Our Company | Money Marque',
      description: 'Money Marque Company'
    }
  },
  {
    path: 'leadership',
    loadChildren: () => import('./about-us/leadership/leadership.module').then(m => m.LeadershipModule),
    data: {
      title: 'Leadership | Money Marque',
      description: 'Money Marque Leadership'
    }
  },
  {
    path: 'faqs',
    loadChildren: () => import('./about-us/faqs/faqs.module').then(m => m.FaqsModule),
    data: {
      title: 'FAQs | Money Marque',
      description: 'Frequently asked questions about Money Marquq'
    }
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./about-us/contact-us/contact-us.module').then(m => m.ContactUsModule),
    data: {
      title: 'Contact Us | Money Marque',
      description: 'Get in touch with us at Money Marque'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
