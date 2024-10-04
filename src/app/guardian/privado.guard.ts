import { CanActivateFn } from '@angular/router';


export const privadoGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    return acceso === 'true';
  }
  return false;
};

export const adminGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && rol === 'admin';
  }
  return false;
};

export const bibliotecarioGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && rol === 'bibliotecario';
  }
  return false;
};

export const invitadosGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && rol === 'invitado';
  }
  return false;
};
export const adminobibliotecarioGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && (rol === 'admin' || rol === 'bibliotecario');
  }
  return false;
};


