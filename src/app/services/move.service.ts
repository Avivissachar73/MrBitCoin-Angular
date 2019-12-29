import { Injectable } from '@angular/core';

import utils from './util.service';
import { UserService } from './user.service';
import { ContactService } from './contact.service';

const MOVES_KEY = 'moves';
const _someMoves = [];

var gMoves = (() => {
  try {
    var moves = _loadFromLocalStorage();
    if (!moves) throw new Error();
    return moves;
  } catch(err) {
    return _someMoves;
  }
})()

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor(private userService : UserService, private contactService : ContactService) { }

  query(filterBy = {}) {
    var moves = [...gMoves];
    if (filterBy.contactId) {
      moves = moves.filter(curr => curr.from._id === filterBy.contactId ||
                           curr.to._id === filterBy.contactId);
    }
    return Promise.resolve(moves);
  }

  get(_id) {
    if (!_id) return Promise.resolve(_getNewMove());
    var move = gMoves.find(move => move._id === _id);
    if (move) return Promise.resolve(move);
    else return Promise.reject();
  }

  save(move) {
    if (move._id) {
      var idx = gMoves.findIndex(curr => curr._id === move._id);
      if (idx !== -1) {
        gMoves.splice(idx, 1, move);
      } else return Promise.reject();
    } else {
      move._id = utils.getRandomId();
      gMoves.unshift(move);
    }
    _saveToLocalStorage();
    return Promise.resolve(move);
  }
  
  remove(_id) {
    var idx = gMoves.findIndex(curr => curr._id === _id);
    if (idx !== -1) {
      gMoves.splice(idx, 1);
      _saveToLocalStorage();
      return Promise.resolve(_id);
    } else return Promise.reject();
  }

  async sendMoney(fromUser, toUser, amount) {
    var move = _getNewMove();
    move.from = {name: fromUser.username, _id: fromUser._id};
    move.to = {name: toUser.name, _id: toUser._id};
    move.amount = amount;
    await this.save(move);

    fromUser.coins -= amount;
    toUser.coins += amount;
    await this.userService.save(fromUser);
    await this.contactService.save(toUser);

    return move;
  }
}


function _getNewMove() {
  return {
    from: null,
    to: null,
    amount: 0,
  }
}

function _loadFromLocalStorage() {
  return utils.loadFromLocalStorage(MOVES_KEY);
}

function _saveToLocalStorage() {
  return utils.saveToLocalStorage(MOVES_KEY, gMoves)
}