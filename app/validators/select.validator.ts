import { AbstractControl } from '@angular/forms';

export function validateDate(control: AbstractControl) {
  const valor = control.value as string;
  let urlRegEx: RegExp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (
    valor == '' ||
    valor == null ||
    valor == 'dd/mm/aaaa' ||
    !valor.match(urlRegEx)
  ) {
    return { invalid: true };
  } else {
    return null;
  }
}

export function validateCpfCnpj(control: AbstractControl) {
  if (control.value == null || control.value == undefined) {
    return null;
  }
  var valor = control.value as string;
  if (valor == '') {
    return null;
  }
  var valor = control.value as string;
  if (valor.length == 14) {
    valor = valor.replace(/[^\d]+/g, '');
    if (valor == '') return { invalid: true };
    if (
      valor.length != 11 ||
      valor == '00000000000' ||
      valor == '11111111111' ||
      valor == '22222222222' ||
      valor == '33333333333' ||
      valor == '44444444444' ||
      valor == '55555555555' ||
      valor == '66666666666' ||
      valor == '77777777777' ||
      valor == '88888888888' ||
      valor == '99999999999'
    )
      return { invalid: true };
    var add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(valor.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(valor.charAt(9))) return { invalid: true };
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(valor.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(valor.charAt(10))) return { invalid: true };
    return null;
  } else if (valor.length == 18) {
    valor = valor.replace(/[^\d]+/g, '');
    if (valor == '') return { invalid: true };
    if (valor.length != 14) return { invalid: true };
    if (
      valor == '00000000000000' ||
      valor == '11111111111111' ||
      valor == '22222222222222' ||
      valor == '33333333333333' ||
      valor == '44444444444444' ||
      valor == '55555555555555' ||
      valor == '66666666666666' ||
      valor == '77777777777777' ||
      valor == '88888888888888' ||
      valor == '99999999999999'
    )
      return { invalid: true };
    var tamanho = valor.length - 2;
    var numeros = valor.substring(0, tamanho);
    var digitos = valor.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += <any>numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (<any>resultado != digitos.charAt(0)) return { invalid: true };
    tamanho = tamanho + 1;
    numeros = valor.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += <any>numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (<any>resultado != digitos.charAt(1)) return { invalid: true };
    return null;
  } else {
    return { invalid: true };
  }
}
