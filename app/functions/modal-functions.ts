import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalFunctions {
  //#region [ OLD ] Deprecated
  AbreModal(modalID: string, contentID: string, screen: string) {
    var modal = document.getElementById(modalID);
    var content = document.getElementById(contentID);
    var screenToggle = document.getElementById(screen);
    modal?.classList.add('modal-open');
    content?.classList.add('modal-content-zoom');
    screenToggle?.classList.add('modal-expand');
  }
  FechaModal(modalID: string, contentID: string, screen: string) {
    var modal = document.getElementById(modalID);
    var content = document.getElementById(contentID);
    var screenToggle = document.getElementById(screen);
    modal?.classList.remove('modal-open');
    content?.classList.remove('modal-content-zoom');
    screenToggle?.classList.remove('modal-expand');
  }
  ModalScreenSwitch(screen_A: string, screen_B: string) {
    var screenA = document.getElementById(screen_A);
    var screenB = document.getElementById(screen_B);
    screenA?.classList.add('modal-expand');
    screenB?.classList.remove('modal-expand');
  }
  ModalScreenClose(screen_A: string) {
    var screenA = document.getElementById(screen_A);
    screenA?.classList.remove('modal-expand');
  }
  PreencheMensagem(mensagemID: string, content: string, messageColor: string) {
    var mensagem = document.getElementById(mensagemID);
    (<HTMLElement>mensagem).innerHTML = content;
    (<HTMLElement>mensagem).style.color = messageColor;
  }
  //#endregion

  //#region [ NEW ]
  ModalOpen(modal: string, screenList?: any) {
    const m = document.getElementById(modal);
    m?.classList.add('open');
    if (screenList != null) {
      const s = document.getElementById(screenList[0]);
      s?.classList.add('expand');
    }
  }
  ModalClose(modal: string, screenList?: any) {
    const m = document.getElementById(modal);
    m?.classList.remove('open');
    if (screenList != null) {
      screenList.forEach((screen: any) => {
        const s = document.getElementById(screen);
        s?.classList.remove('expand');
      });
    }
  }
  ModalScreen(screenA: string, screenB: string) {
    const a = document.getElementById(screenA);
    const b = document.getElementById(screenB);
    a?.classList.add('expand');
    b?.classList.remove('expand');
  }
  ModalExpand(screen: string) {
    const a = document.getElementById(screen);
    a?.classList.add('expand');
  }
  ModalCollapse(screen: string) {
    const a = document.getElementById(screen);
    a?.classList.remove('expand');
  }
  //#endregion
}
