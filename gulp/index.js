"use strict"

let requireDir = require('require-dir');

// tasksの読み込み
requireDir ('./tasks', { recurse: true });
