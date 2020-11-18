import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import * as moment from 'moment';
import { Card } from '../card';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  cardForm: FormGroup;
  minDate = moment(new Date()).format('YYYY-MM-DD');
  people: Card[];
  newCard = new Card();

  constructor(private fb: FormBuilder, private router: Router, private payment: PaymentService) { }

  ngOnInit(): void {
  	this.cardForm = this.fb.group({
  		number: ['', [Validators.required]],
  		name: ['', [Validators.required]],
  		date: ['', [Validators.required, Validators.min]],
  		code: ['', [Validators.minLength(3), Validators.maxLength(3)]],
  		amount: ['', [Validators.required, Validators.pattern]]
  	});
    this.refreshPeople();
  }

  refreshPeople() {
    this.payment.getPeople()
      .subscribe(data => {
        this.people=data;
      })      
 
  }


  onSubmit(e) {
    this.newCard.creditCardNumber=e.target.elements[0].value;
    this.newCard.cardHolder=e.target.elements[1].value;
    this.newCard.expirationDate=e.target.elements[2].value;
    this.newCard.securityCode=e.target.elements[3].value;
    this.newCard.amount=e.target.elements[4].value;
    this.payment.addCard(this.newCard).subscribe(data => {this.refreshPeople();});
    this.router.navigate(['']);
  }

}