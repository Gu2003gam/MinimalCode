import{sum, subtraction, division, multiplication} from "./Functions.mjs"

describe("Verificar função soma", ()=>{
    it('Checar operação', ()=>{
        expect(sum(5, 1)).toBe(6);
    })
})

describe("Verificar função subtração", ()=>{
    it('Checar operação', ()=>{
        expect(subtraction(5, 1)).toBe(4);
    })
})

describe("Verificar função divisão", ()=>{
    it('Checar operação', ()=>{
        expect(division(4, 2)).toBe(2);
    })
})

describe("Verificar função multiplicação", ()=>{
    it('Checar operação', ()=>{
        expect(multiplication(4, 2)).toBe(8);
    })
})