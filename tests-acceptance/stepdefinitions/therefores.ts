import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {Task} from '../../angular-http/src/app/models/task'
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
//import request = require("request-promise");

//let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

//let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));

var base_service_url = "http://localhost:3000/";
let pAND = ((p,q) => p.then(a => q.then(b => a && b)))
let code = 0
defineSupportCode(function ({ Given, When, Then }) {
    
    Given(/^Estou na página de descrição das crianças$/, async() =>{
        await browser.get("http://localhost:4200/children-detailing");
        await expect(browser.getTitle()).to.eventually.equal('SACA');
    })

     
})
