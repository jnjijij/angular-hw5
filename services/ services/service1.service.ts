 // services/service1.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  constructor(private apiBaseUrl: string) { }

  getData() {
    // Використання базового URL для отримання даних
    const url = this.apiBaseUrl + '/data';
    // Логіка для отримання даних з використанням URL
  }
}

// Файл: services/service2.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  constructor(private apiBaseUrl: string) { }

  postData(data: any) {
    // Використання базового URL для відправки даних
    const url = this.apiBaseUrl + '/data';
    // Логіка для відправки даних з використанням URL
  }
}

// Файл: interfaces/api.service.ts

import { Injectable } from '@angular/core';
import { Service1Service } from '../services/service1.service';
import { Service2Service } from '../services/service2.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl: string = 'https://example.com/api';
  service1: Service1Service;
  service2: Service2Service;

  constructor() {
    this.service1 = new Service1Service(this.apiBaseUrl);
    this.service2 = new Service2Service(this.apiBaseUrl);
  }
}

// Файл: app.component.ts

import { Component } from '@angular/core';
import { ApiService } from './interfaces/api.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="postData()">Post Data</button>
  `
})
export class AppComponent {
  constructor(private apiService: ApiService) { }

  getData() {
    this.apiService.service1.getData();
  }

  postData() {
    const data = { /* Дані, які потрібно відправити */ };
    this.apiService.service2.postData(data);
  }
}
