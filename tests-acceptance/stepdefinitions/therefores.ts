import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

//let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

//let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let cmp = ((elem, trio) => {
    var sentence = true
    sentence = sentence && elem.element(by.name('th_id')).getText().then(text => text === trio[0])
    sentence = sentence && elem.element(by.name('th_title')).getText().then(text => text === trio[1])
    sentence = sentence && elem.element(by.name('th_description')).getText().then(text => text === trio[2])
    return sentence
    
});

let cmpM = ((elem, val) => {
    var sentence = true
    sentence = sentence && elem.element(by.name('atividade_dependente')).getText().then(text => text === val)
    return sentence
    
});


let pAND = ((p,q) => p.then(a => q.then(b => a && b)))
let code = 0
defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na pagina da criança com id "(\d*)"$/, async (id) => {
        await browser.get("http://localhost:4200/informations/"+id);
        await expect(browser.getTitle()).to.eventually.equal('SACA');
        //await $("a[name='alunos']").click();
    })

    Given(/^vejo o profissional responsavel "([^\"]*)" e o nome da criança "([^\"]*)"$/, async (prof, child) => {

        /*checar se o nome do surpervisor eh o mesmo */
        var responsible_pro : ElementArrayFinder = element.all(by.name('td_child_responsible_pro'));
        await responsible_pro;
        var same_responsible_pro = responsible_pro.filter(elem =>
                                      elem.getText().then(text => text === prof));
        await same_responsible_pro;
        await same_responsible_pro.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

        /*checar se o nome do da crianca eh o mesmo */

        var name : ElementArrayFinder = element.all(by.name('td_child_name'));
        await name;
        var same_name = name.filter(elem =>
                                      elem.getText().then(text => text === child));
        await same_name;
        await same_name.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

        /*clicar no botao que ativa a funcionalidade*/

    });

    Given(/^Seleciono o link "([^\"]*)"$/, async (therefore:string) => {
        /* clicar no llink que leva para o componente da aplicacao */
        await element(by.linkText(therefore)).click();
        
    });

    When(/^Solicito as atividades que tem "([^\"]*)" como pré-requisito$/, async (atividade:string) => {
        /* insere a atividade que vai ser testada */
        await $("input[name='input_atividade']").sendKeys(<string> atividade);
    });

    Then(/^Aparece a lista dos Id's, titulos e descrições das atividades conseguintes, "([^\"]*)" "([^\"]*)" "([^\"]*)", "([^\"]*)" "([^\"]*)" "([^\"]*)", "([^\"]*)" "([^\"]*)" "([^\"]*)" em uma ordem qualquer$/, 
    async (id1:string, at1:string, ds1:string, id2:string, at2:string, ds2:string, id3:string, at3:string, ds3:string,) => 
    {
        /* Recebe o array de elemento que dentro tem as informacoes de cada atividade mostrada*/
        var dependentes : ElementArrayFinder = element.all(by.name('atividade_list'));
        await dependentes
        /* Cria um array com os argumentos do cenario para comparar mais tarde */
        var params = [[id1, at1, ds1], [id2, at2, ds2], [id3, at3, ds3]]
        await params  

        /* compara o tamanho das listas para ver se são compativeis para o loop*/
        await dependentes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(params.length));
        /* ordena os arrays para evitar comparacoes erradas */
        await (await dependentes).sort
        await (await params).sort

        /* para cada elemento compara seus valores com os do argumento */
        for(let i = 0; i < params.length; i++) {
            await dependentes.then(elems => expect(Promise.resolve(cmp((elems[i]),params[i]))).to.eventually.equal(true))
        }

        /* ver se mensagem de atividade se dependencia foi mostrada */
        var mensage : ElementArrayFinder = element.all(by.name('atividade_dependente'));
        await mensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));

        /* ver se a mensagem de atividade nao cadastrada foi mostrada */
        var wmensage : ElementArrayFinder = element.all(by.name('atividade_nc'));
        await wmensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));


    });
    
    Then(/^Aparece uma lista com uma linha verde indicando que "([^\"]*)"$/, 
    async (arg:string) => 
    {
    
        /* ver se mensagem de atividade se dependencia foi mostrada */
        var mensage : ElementArrayFinder = element.all(by.name('atividade_dependente'));
        await mensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

        /* ver se a mensagem de atividade nao cadastrada foi mostrada */
        var wmensage : ElementArrayFinder = element.all(by.name('atividade_nc'));
        await wmensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));

        /* checa pra ver se alguma meta está sendo printada(o que nao pode acontecer)*/
        var dependentes : ElementArrayFinder = element.all(by.name('atividade_list'));
        await dependentes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
        
    });

    Then(/^Aparece uma lista com uma linha laranja indicando que "([^\"]*)"$/, 
    async (arg:string) => 
    {
    
       /* ver se a mensagem de atividade nao cadastrada foi mostrada */
       var wmensage : ElementArrayFinder = element.all(by.name('atividade_nc'));
       await wmensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

       /* ver se mensagem de atividade se dependencia foi mostrada */
       var mensage : ElementArrayFinder = element.all(by.name('atividade_dependente'));
       await mensage.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));

       /* checa pra ver se alguma meta está sendo printada(o que nao pode acontecer)*/
       var dependentes : ElementArrayFinder = element.all(by.name('atividade_list'));
       await dependentes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

})
