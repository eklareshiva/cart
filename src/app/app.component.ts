import { Component, OnInit } from '@angular/core';
import { Myinterface } from './Myinterface'
import { MyService } from './my.service'
import {ReactiveFormsModule, FormGroup,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectCarting';
  firstname="shiva";
  lastname="eklare";
  CartForm:FormGroup;
  submitted=false;
  MyfetchedArray:Myinterface[];
  MyCartingElements=[
    {
      Name:"Mobile",Category:"Samsung",Price:"10000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"105000",PhotoPath:"assets/samsung2.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"11000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"12000",PhotoPath:"assets/samsung3.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"13000",PhotoPath:"assets/samsung6.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"14000",PhotoPath:"assets/samsung5.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"15000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"16000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"17000",PhotoPath:"assets/samsung3.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"18000",PhotoPath:"assets/samsung5.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"19000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"17000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"16000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"18000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"15000",PhotoPath:"assets/samsung5.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"11000",PhotoPath:"assets/samsung3.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"12000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"14000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"16000",PhotoPath:"assets/samsung3.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"18000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"100000",PhotoPath:"assets/samsung5.jpg",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"19000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"17000",PhotoPath:"assets/samsung1.webp",AddtoCart:"AddtoCart"
    },
    {
      Name:"Mobile",Category:"Samsung",Price:"11000",PhotoPath:"assets/samsung4.webp",AddtoCart:"AddtoCart"
    }
  ]
  ngOnInit()
  {
    this._myservice.getEmployees().subscribe(res=>
      {
        this.MyfetchedArray=res;
      });
      this.CartForm=this.formbuilder.group({
        id:['',Validators.required],
        Name:['',Validators.required],
        Category:['',Validators.required],
        Price:['',Validators.required],
        PhotoPath:['',Validators.required]
      })
    
  }
  constructor(private _myservice:MyService,private formbuilder:FormBuilder )
  {

  }
  SubmitForm(event)
  {
    this.submitted=true;
    this.MyfetchedArray.push(event.id,event.Name,event.Category,event.Price,event.PhotoPath);
    
    // console.log(this.MyfetchedArray);

  }
  
  Delete(item)
  {
    alert('Deleted Successfully!!!')
    // this._myservice.deleteCart();
    this.MyfetchedArray.splice(item,1);

  }
  Edit()
  {
this.CartForm.setValue(
  {
    id:3,
    Name:"Samsung",
    Category:"Mobile",
    Price:"13000",
    PhotoPath:"assets/samsung1.wepg",
  }
)
alert('Edit your Data on top...!!!!')
  }
  Expand()
  {
    alert('hi Moue over')
  }
  
Submit(emp:Myinterface)
{
  // this._myservice.postEmployees(emp).subscribe((data:Myinterface)=>
  // {
  //   console.log(data);
  // })

  alert('Item Added Successfully!!!')
}

}
