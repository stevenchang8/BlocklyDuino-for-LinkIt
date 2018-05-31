/**
 * @license
 * Blockly for LinkIt 7697
 *
 * Copyright 2018 MediaTek Inc.
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for I2C interface HTU21D sensors
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Arduino.htu');

goog.require('Blockly.Arduino');

Blockly.Arduino.htu21d_read = function() {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>'
  Blockly.Arduino.definitions_['define_htu_include'] = '#include <SparkFunHTU21D.h>'
  Blockly.Arduino.definitions_['define_htu_inst'] = 'HTU21D htu21d;';

  Blockly.Arduino.setups_['setup_htu_inst'] = 'htu21d.begin();';

  var code = '';
  switch(this.getFieldValue('MEASUREMENT')){
    case 'HUMIDITY':
      code += 'htu21d.readHumidity()';
      break;
    case 'TEMPERATURE_C':
      code += 'htu21d.readTemperature()';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
