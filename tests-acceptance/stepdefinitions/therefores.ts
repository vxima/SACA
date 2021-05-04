import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { AssertionError } from 'assert';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na pagina de registro de atividades$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('SACA');
        await expect($("a[name='register-task']").click());
    })

    Given(/^Vejo a tabela de atividades registradas$/, async () => {
         await expect($("table[name='tabelaDeAtividades']"));
    });

    When(/^Clico no campo dificuldade da tabela"$/, async () => {
        await expect($("th[name='dificuldade']")).click();
    });

    Then(/^A tabela é ordenada de acordo com o nível de dificuldade em ordem crescente$/, async () => {
        var dificuldadeList : ElementArrayFinder = element.all(by.name('dificuldadeValue'));
        var previous = dificuldadeList[0];
        await expect(dificuldadeList.forEach(element => {
            if(element >= previous)
                previous = element
            else return false;
        return true;
        })).to.eventually.equal(true)
    });
    
})
