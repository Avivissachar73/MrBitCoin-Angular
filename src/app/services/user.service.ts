import { Injectable } from '@angular/core';

import utils from './util.service';
import utilService from './util.service';

const USER_KEY = 'logged_user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getLoggedUser() {
    return Promise.resolve(_loadFromStorgage());
  }

  login(user) {
    user._id = utils.getRandomId();
    user.coins = 100;
    saveToStorage(user);
    return Promise.resolve(user);
  }

  save(user) {
    saveToStorage(user);
    return Promise.resolve(user);
  }

}


function _loadFromStorgage() {
  return utils.loadFromLocalStorage(USER_KEY);
}

function saveToStorage(user) {
  return utilService.saveToLocalStorage(USER_KEY, user);
}