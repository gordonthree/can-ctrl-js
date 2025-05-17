export const CanConstants = new Map([
[0x100, { name: 'ERROR_OVER_CURRENT', description: 'error condition over current DLC 6' }],
[0x101, { name: 'ERROR_OVER_TEMP', description: 'error condition over temp DLC 6' }],
[0x102, { name: 'ERROR_OVER_VOLT', description: 'error condition over volt DLC 6' }],











[0x110, { name: 'SW_RESERVED110', description: 'reserved 110 DLC ' }],
[0x111, { name: 'SW_RESERVED111', description: 'reserved 111 DLC ' }],
[0x112, { name: 'SW_SET_MODE', description: 'set switch mode DLC 6' }],
[0x113, { name: 'SW_SET_OFF', description: 'switch off DLC 5' }],
[0x114, { name: 'SW_SET_ON', description: 'switch on DLC 5' }],
[0x115, { name: 'SW_MOM_PRESS', description: 'switch momentary press DLC 5' }],
[0x116, { name: 'SW_SET_MOM_DUR', description: 'set momentary switch duration ms DLC 7' }],
[0x117, { name: 'SW_SET_PWM_DUTY', description: 'switch set pwm duty DLC 7' }],
[0x118, { name: 'SW_SET_PWM_FREQ', description: 'switch set pwm freq DLC 7' }],
[0x119, { name: 'SW_SET_BLINK_DELAY', description: 'switch set blink delay in tenths of a second 1-100 DLC 7' }],
[0x11A, { name: 'SW_SET_STROBE_PAT', description: 'switch set strobe pattern DLC 6' }],
[0x11B, { name: 'SW_SET_STATE_MEM', description: 'enable / disable switch last state memory DLC 6' }],













[0x200, { name: 'SET_DISPLAY_OFF', description: 'set display off DLC 5' }],
[0x201, { name: 'SET_DISPLAY_ON', description: 'set display on DLC 5' }],
[0x202, { name: 'SET_DISPLAY_CLEAR', description: 'set display clear DLC 5' }],
[0x203, { name: 'SET_DISPLAY_FLASH', description: 'set display flash DLC 6' }],
[0x204, { name: 'SET_DISPLAY_BACKLIGHT_COLOR', description: 'set display backlight color DLC 7' }],
[0x205, { name: 'SET_DISPLAY_BACKLIGHT_BRIGHTNESS', description: 'set display backlight brightness DLC 6' }],
[0x206, { name: 'REQ_DISPLAY_CONFIG', description: 'req display config DLC 6' }],
[0x207, { name: 'REQ_DISPLAY_DATA', description: 'req display data DLC 6' }],
[0x208, { name: 'SET_OLED_FIELD_COLOR', description: 'set oled field color DLC 8' }],
[0x209, { name: 'SET_OLED_FIELD_BLINK', description: 'set oled field blink DLC 8' }],
[0x20A, { name: 'SET_OLED_FIELD_STROBE', description: 'set oled field strobe DLC 8' }],
[0x20B, { name: 'SET_DISPLAY_RESERVED_20B', description: 'set display reserved 20b DLC 8' }],
[0x20C, { name: 'SET_DISPLAY_RESERVED_20C', description: 'set display reserved 20c DLC 8' }],
[0x20D, { name: 'DISPLAY_DATA_MSG', description: 'display data msg DLC 8' }],
[0x20E, { name: 'DISPLAY_DATA_ACK', description: 'display data ack DLC 8' }],
[0x20F, { name: 'SET_DISPLAY_RESERVED_20F', description: 'set display reserved 20f DLC ' }],
[0x210, { name: 'SET_ARGB_STRIP_COLOR', description: 'set argb strip color DLC ' }],
[0x211, { name: 'SET_ARGBW_STRIP_COLOR', description: 'set argbw strip color DLC 7' }],
[0x212, { name: 'SET_ANALOG_STRIP_COLOR', description: 'set analog strip color DLC 7' }],
[0x213, { name: 'SET_ADDR_STRIP_EFFECT', description: 'set addr strip effect DLC 7' }],
[0x214, { name: 'SET_LED_STRIP_BRIGHTNESS', description: 'set led strip brightness DLC 7' }],
[0x215, { name: 'SET_LED_STRIP_OFF', description: 'set led strip off DLC 7' }],
[0x216, { name: 'SET_LED_STRIP_ON', description: 'set led strip on DLC 5' }],
[0x217, { name: 'SET_LED_RESERVED_217', description: 'set led reserved 217 DLC 5' }],
[0x218, { name: 'SET_LED_RESERVED_218', description: 'set led reserved 218 DLC ' }],
[0x219, { name: 'SET_LED_RESERVED_219', description: 'set led reserved 219 DLC ' }],
[0x21A, { name: 'SET_LED_RESERVED_21A', description: 'set led reserved 21a DLC ' }],
[0x21B, { name: 'SET_LED_RESERVED_21B', description: 'set led reserved 21b DLC ' }],
[0x21C, { name: 'SET_LED_RESERVED_21C', description: 'set led reserved 21c DLC ' }],
[0x21D, { name: 'SET_LED_RESERVED_21D', description: 'set led reserved 21d DLC ' }],
[0x21E, { name: 'SET_LED_RESERVED_21E', description: 'set led reserved 21e DLC ' }],
[0x21F, { name: 'SET_LED_RESERVED_21F', description: 'set led reserved 21f DLC ' }],
[0x220, { name: 'SET_ARGB_BUTTON_COLOR', description: 'set argb button color DLC ' }],
[0x221, { name: 'SET_ARGB_BUTTON_LED_MODE', description: 'set argb button led mode DLC ' }],
[0x222, { name: 'SET_BUTTON_MODE', description: 'set button mode 0 disabled, 1 toggle, 2 momentary DLC ' }],


















































[0x400, { name: 'ACK_INTRO', description: 'acknowledge introduction, clear flag on remote device DLC 4' }],
[0x401, { name: 'REQ_NODE_INTRO', description: 'general intro request for all node types DLC 4' }],
[0x402, { name: 'MSG_NORM_OPER', description: 'message to all nodes to being normal operation, sent after introduction and enumeration are complete DLC 4' }],
[0x403, { name: 'MSG_HALT_OPER', description: 'message to all nodes to stop transmitting messages and wait for instructions DLC 4' }],
[0x404, { name: 'REQ_NODECHECK', description: 'remote nodes should respond with their node id and last boot timestamp DLC 4' }],
[0x405, { name: 'REQ_HEALTHCHECK', description: 'remote nodes should respond with diagnostic sensor data DLC 4' }],
[0x406, { name: 'REQ_IFACE', description: 'req interfaces node include buttons, displays leds and sensors DLC 4' }],
[0x407, { name: 'REQ_SWITCHBOX', description: 'req switch boxes nodes include anything that controls a load DLC 4' }],




[0x40C, { name: 'DATA_EPOCH', description: 'epoch timestamp from controller DLC 8' }],
[0x40D, { name: 'DATA_SENSOR_MSG', description: 'controller assigned message id to use for transferring sensor data range 72A:72F DLC 8' }],


[0x410, { name: 'REQ_BUTTONS', description: 'req buttons DLC 4' }],
[0x411, { name: 'REQ_OUTPUTS', description: 'req outputs DLC 4' }],
[0x412, { name: 'REQ_DISPLAYS', description: 'req displays DLC 4' }],
[0x413, { name: 'REQ_TEMP_SENSOR', description: 'req temp sensor DLC 4' }],
[0x414, { name: 'REQ_VOLT_SENSOR', description: 'req volt sensor DLC 4' }],
[0x415, { name: 'REQ_AMP_SENSOR', description: 'req amp sensor DLC 4' }],
[0x416, { name: 'REQ_CLOSURE_INPUT', description: 'req closure input DLC 4' }],
[0x417, { name: 'REQ_AMBIENT_LIGHT', description: 'req ambient light sensors DLC 4' }],
[0x418, { name: 'REQ_IMU_SENSORS', description: 'req imu sensors DLC 4' }],

















[0x500, { name: 'DATA_BUTTON_DOWN', description: 'button down DLC 7' }],
[0x501, { name: 'DATA_BUTTON_UP', description: 'button up DLC 7' }],
[0x502, { name: 'DATA_KEYSWITCH_LOCK', description: 'keyswitch lock DLC 7' }],
[0x503, { name: 'DATA_KEYSWITCH_UNLOCK', description: 'keyswitch unlock DLC 7' }],
[0x504, { name: 'DATA_DIAL_CLOCKWISE', description: 'dial clockwise DLC 7' }],
[0x505, { name: 'DATA_DIAL_COUNTER_CLOCKWISE', description: 'dial counter clockwise DLC 7' }],
[0x506, { name: 'DATA_DIAL_CLICK', description: 'dial click DLC 7' }],
[0x507, { name: 'DATA_RFID_READ', description: 'rfid read DLC 7' }],
[0x508, { name: 'DATA_CONTACT_CLOSED', description: 'contact closed DLC 7' }],
[0x509, { name: 'DATA_CONTACT_OPENED', description: 'contact opened DLC 7' }],
[0x50A, { name: 'DATA_INTERNAL_TEMPERATURE', description: 'internal temperature DLC 7' }],
[0x50B, { name: 'DATA_INTERNAL_PCB_VOLTS', description: 'internal pcb volts DLC 7' }],
[0x50C, { name: 'DATA_INTERNAL_PCB_CURRENT', description: 'internal pcb current DLC 7' }],
[0x50D, { name: 'DATA_EXTERNAL_TEMPERATURE', description: 'external temperature DLC 8' }],
[0x50E, { name: 'DATA_EXTERNAL_VOLTS', description: 'external volts DLC 8' }],
[0x50F, { name: 'DATA_EXTERNAL_CURRENT', description: 'external current DLC 8' }],
[0x510, { name: 'DATA_AMBIENT_LIGHT_USE_PRIV_MSG', description: 'ambient light USE PRIV MSG DLC 5' }],
[0x511, { name: 'DATA_IMU_X_AXIS', description: 'IMU X Axis USE PRIV MSG DLC 5' }],
[0x512, { name: 'DATA_IMU_Y_AXIS', description: 'IMU Y Axis USE PRIV MSG DLC 5' }],
[0x513, { name: 'DATA_IMU_Z_AXIS', description: 'IMU Z Axis USE PRIV MSG DLC 5' }],
[0x514, { name: 'DATA_IMU_X_GYRO', description: 'IMU X Gyro USE PRIV MSG DLC 5' }],
[0x515, { name: 'DATA_IMU_Y_GYRO', description: 'IMU Y Gyro USE PRIV MSG DLC 5' }],
[0x516, { name: 'DATA_IMU_Z_GYRO', description: 'IMU Z Gyro USE PRIV MSG DLC 5' }],
[0x517, { name: 'DATA_IMU_TEMPERATURE', description: 'IMU temperature DLC 8' }],
[0x518, { name: 'DATA_ANALOG_KNOB_MV', description: 'analog knob mv DLC 7' }],
[0x519, { name: 'DATA_OUTPUT_SWITCH_MOM_PUSH', description: 'output switch mom push DLC 7' }],
[0x51A, { name: 'DATA_NODE_CPU_TEMP', description: 'node cpu temp DLC 7' }],
[0x51B, { name: 'DATA_NODE_LAST_BOOT_TIMESTAMP', description: 'node last boot timestamp DLC 8' }],
[0x51C, { name: 'DATA_NODE_PCB_TEMP', description: 'node pcb temp DLC 6' }],
[0x51D, { name: 'DATA_OUTPUT_SWITCH_STATE', description: 'output switch state DLC 5' }],
[0x51E, { name: 'DATA_RESERVED_51E', description: 'data reserved 51e DLC 5' }],
[0x51F, { name: 'DATA_OUTPUT_SWITCH_MODE', description: 'output switch mode DLC 6' }],
[0x520, { name: 'DATA_DISPLAY_OFF', description: 'display off DLC 5' }],
[0x521, { name: 'DATA_DISPLAY_ON', description: 'display on DLC 5' }],
[0x522, { name: 'DATA_DISPLAY_CLEAR', description: 'display clear DLC 5' }],
[0x523, { name: 'DATA_DISPLAY_MODE', description: 'display mode DLC 6' }],
[0x524, { name: 'DATA_ARGB_BUTTON_COLOR', description: 'argb button color DLC 7' }],
[0x525, { name: 'DATA_ARGB_BUTTON_LED_MODE', description: 'argb button led mode DLC 7' }],




[0x52A, { name: 'DATA_RESERVED_52A', description: '0x52A reserved private msg for 64-bit sensor data DLC 8' }],
[0x52B, { name: 'DATA_RESERVED_52B', description: '0x52B reserved private msg for 64-bit sensor data DLC 8' }],
[0x52C, { name: 'DATA_RESERVED_52C', description: '0x52C reserved private msg for 64-bit sensor data DLC 8' }],
[0x52D, { name: 'DATA_RESERVED_52D', description: '0x52D reserved private msg for 64-bit sensor data DLC 8' }],
[0x52E, { name: 'DATA_RESERVED_52E', description: '0x52E reserved private msg for 64-bit sensor data DLC 8' }],
[0x52F, { name: 'DATA_RESERVED_52F', description: '0x52F reserved private msg for 64-bit sensor data DLC 8' }],
[0x530, { name: 'DATA_RESERVED_530', description: '0x530 reserved private msg for 64-bit sensor data DLC 8' }],
[0x531, { name: 'DATA_RESERVED_531', description: '0x531 reserved private msg for 64-bit sensor data DLC 8' }],
[0x532, { name: 'DATA_RESERVED_532', description: '0x532 reserved private msg for 64-bit sensor data DLC 8' }],
[0x533, { name: 'DATA_RESERVED_533', description: '0x533 reserved private msg for 64-bit sensor data DLC 8' }],
[0x534, { name: 'DATA_RESERVED_534', description: '0x534 reserved private msg for 64-bit sensor data DLC 8' }],
[0x535, { name: 'DATA_RESERVED_535', description: '0x535 reserved private msg for 64-bit sensor data DLC 8' }],
[0x536, { name: 'DATA_RESERVED_536', description: '0x536 reserved private msg for 64-bit sensor data DLC 8' }],
[0x537, { name: 'DATA_RESERVED_537', description: '0x537 reserved private msg for 64-bit sensor data DLC 8' }],
[0x538, { name: 'DATA_RESERVED_538', description: '0x538 reserved private msg for 64-bit sensor data DLC 8' }],
[0x539, { name: 'DATA_RESERVED_539', description: '0x539 reserved private msg for 64-bit sensor data DLC 8' }],
[0x53A, { name: 'DATA_RESERVED_53A', description: '0x53A reserved private msg for 64-bit sensor data DLC 8' }],
[0x53B, { name: 'DATA_RESERVED_53B', description: '0x53B reserved private msg for 64-bit sensor data DLC 8' }],
[0x53C, { name: 'DATA_RESERVED_53C', description: '0x53C reserved private msg for 64-bit sensor data DLC 8' }],
[0x53D, { name: 'DATA_RESERVED_53D', description: '0x53D reserved private msg for 64-bit sensor data DLC 8' }],
[0x53E, { name: 'DATA_RESERVED_53E', description: '0x53E reserved private msg for 64-bit sensor data DLC 8' }],
[0x53F, { name: 'DATA_RESERVED_53F', description: '0x53F reserved private msg for 64-bit sensor data DLC 8' }],

























[0x700, { name: 'DISP_ANALOG_LED_STRIP', description: 'analog led strip DLC 8' }],
[0x701, { name: 'DISP_ARGBW_LED_STRIP', description: 'argbw led strip DLC 8' }],
[0x702, { name: 'DISP_ARGB_LED_STRIP', description: 'argb led strip DLC 8' }],
[0x703, { name: 'DISP_RESERVED_703', description: 'disp reserved 703 DLC 8' }],
[0x704, { name: 'DISP_RESERVED_704', description: 'disp reserved 704 DLC 8' }],
[0x705, { name: 'DISP_OLED', description: 'non-touch oled display DLC 8' }],
[0x706, { name: 'DISP_RESERVED_706', description: 'disp reserved 706 DLC 8' }],
[0x707, { name: 'DISP_LCD', description: 'non-touch lcd display DLC 8' }],
[0x708, { name: 'DISP_RESERVED_708', description: 'disp reserved 708 DLC ' }],
[0x709, { name: 'DISP_RESERVED_709', description: 'disp reserved 709 DLC ' }],
[0x70A, { name: 'DISP_RESERVED_70A', description: 'disp reserved 70a DLC ' }],
[0x70B, { name: 'DISP_RESERVED_70B', description: 'disp reserved 70b DLC ' }],
[0x70C, { name: 'DISP_RESERVED_70C', description: 'disp reserved 70c DLC ' }],
[0x70D, { name: 'DISP_RESERVED_70D', description: 'disp reserved 70d DLC ' }],
[0x70E, { name: 'DISP_RESERVED_70E', description: 'disp reserved 70e DLC ' }],
[0x70F, { name: 'DISP_RESERVED_70F', description: 'disp reserved 70f DLC ' }],
[0x710, { name: 'INPUT_NO_BACKLIGHT', description: 'input no backlight DLC 7' }],
[0x711, { name: 'INPUT_ARGB_BACKLIGHT', description: 'input argb backlight DLC 7' }],
[0x712, { name: 'INPUT_ANALOG_BACKLIGHT', description: 'input analog backlight DLC 7' }],
[0x713, { name: 'INPUT_VIRTUAL', description: 'input virtual DLC 7' }],
[0x714, { name: 'INPUT_WITH_DISPLAY', description: 'input with display DLC 7' }],
[0x715, { name: 'INPUT_ANALOG_KNOB', description: 'analog knob input DLC 7' }],
[0x716, { name: 'INPUT_JOG_DIAL_CLICK', description: 'jog dial with click DLC 7' }],
[0x717, { name: 'INPUT_KEY_SWITCH', description: 'key switch DLC 7' }],
[0x718, { name: 'INPUT_MOTION_DET', description: 'motion detector DLC 7' }],
[0x719, { name: 'INPUT_CAP_TOUCH', description: 'capacitive touch switch stand-alone DLC 7' }],
[0x71A, { name: 'INPUT_JOG_DIAL_NOCLICK', description: 'jog dial without click DLC 7' }],
[0x71B, { name: 'INPUT_RFID_READER', description: 'RFID reader input DLC 7' }],
[0x71C, { name: 'BUTTON_CONTACT_PULL_DOWN', description: 'button contact pull down DLC 7' }],
[0x71D, { name: 'INPUT_CONTACT_PULL_UP', description: 'input contact pull up DLC 7' }],
[0x71E, { name: 'INPUT_RESERVED_71E', description: 'input reserved 71e DLC 5' }],
[0x71F, { name: 'INPUT_RESERVED_71F', description: 'input reserved 71f DLC 5' }],
[0x720, { name: 'INPUT_DIGITAL_TEMP', description: 'input digital temp DLC 5' }],
[0x721, { name: 'INPUT_K_TYPE_TEMP', description: 'input k type temp DLC 5' }],
[0x722, { name: 'NODE_LASTBOOT', description: 'last boot timestamp DLC 5' }],
[0x723, { name: 'NODE_PCB_TEMP', description: 'node pcb temp DLC 5' }],
[0x724, { name: 'NODE_CPU_TEMP', description: 'node cpu temp DLC 5' }],
[0x725, { name: 'INPUT_EXT_VOLTAGE_SENSOR', description: 'input ext voltage sensor DLC 5' }],
[0x726, { name: 'NODE_INT_VOLTAGE_SENSOR', description: 'node int voltage sensor DLC 5' }],
[0x727, { name: 'NODE_INT_CURRENT_SENSOR', description: 'node int current sensor DLC 5' }],
[0x728, { name: 'INPUT_EXT_CURRENT_SHUNT', description: 'input ext current shunt DLC 5' }],
[0x729, { name: 'INPUT_EXT_CURRENT_HALL', description: 'input ext current hall DLC 5' }],
[0x72A, { name: 'SENSOR_RESERVED_72A', description: 'sensor reserved 72a DLC 5' }],
[0x72B, { name: 'SENSOR_RESERVED_72B', description: 'sensor reserved 72b DLC 5' }],
[0x72C, { name: 'SENSOR_RESERVED_72C', description: 'sensor reserved 72c DLC 5' }],
[0x72D, { name: 'SENSOR_RESERVED_72D', description: 'sensor reserved 72d DLC 5' }],
[0x72E, { name: 'SENSOR_RESERVED_72E', description: 'sensor reserved 72e DLC 5' }],
[0x72F, { name: 'SENSOR_RESERVED_72F', description: 'sensor reserved 72f DLC 5' }],
[0x730, { name: 'INPUT_AMBIENT_LIGHT', description: 'input ambient light DLC 5' }],
[0x731, { name: 'IMU_X_AXIS_SENSOR', description: 'IMU X Axis sensor DLC 5' }],
[0x732, { name: 'IMU_Y_AXIS_SENSOR', description: 'IMU Y Axis sensor DLC 5' }],
[0x733, { name: 'IMU_Z_AXIS_SENSOR', description: 'IMU Z Axis sensor DLC 5' }],
[0x734, { name: 'IMU_X_GYRO_SENSOR', description: 'IMU X Gyro sensor DLC 5' }],
[0x735, { name: 'IMU_Y_GYRO_SENSOR', description: 'IMU Y Gyro sensor DLC 5' }],
[0x736, { name: 'IMU_Z_GYRO_SENSOR', description: 'IMU Z Gyro sensor DLC 5' }],
[0x737, { name: 'IMU_TEMP_SENSOR', description: 'IMU temp sensor DLC 5' }],
[0x738, { name: 'GPS_UTC_TIME', description: 'GPS utc time DLC 5' }],
[0x739, { name: 'GPS_LATITUDE', description: 'GPS latitude DLC 5' }],
[0x73A, { name: 'GPS_NS_IND', description: 'GPS NS IND DLC 5' }],
[0x73B, { name: 'GPS_LONGITUDE', description: 'GPS longitude DLC 5' }],
[0x73C, { name: 'GPS_EW_IND', description: 'GPS EW IND DLC 5' }],
[0x73D, { name: 'GPS_ALTITUDE', description: 'GPS altitude DLC 5' }],
[0x73E, { name: 'GPS_STATUS', description: 'GPS status DLC 5' }],
[0x73F, { name: 'SENSOR2_RESERVED_73F', description: 'sensor2 reserved 73f DLC ' }],
[0x740, { name: 'OUT_HIGH_CURRENT_SW', description: 'high current solid state switch DLC 6' }],
[0x741, { name: 'OUT_LOW_CURRENT_SW', description: 'low current solid state switch DLC 6' }],
[0x742, { name: 'OUT_OPEN_DRAIN', description: 'open drain output DLC 6' }],
[0x743, { name: 'OUT_MECH_RELAY', description: 'mechanical relay DLC 6' }],
[0x744, { name: 'OUT_RESERVED_744', description: 'out reserved 744 DLC ' }],
[0x745, { name: 'OUT_RESERVED_745', description: 'out reserved 745 DLC ' }],
[0x746, { name: 'OUT_RESERVED_746', description: 'out reserved 746 DLC ' }],
[0x747, { name: 'OUT_RESERVED_747', description: 'out reserved 747 DLC ' }],
[0x748, { name: 'OUT_RESERVED_748', description: 'out reserved 748 DLC ' }],
[0x749, { name: 'OUT_RESERVED_749', description: 'out reserved 749 DLC ' }],
[0x74A, { name: 'OUT_RESERVED_74A', description: 'out reserved 74a DLC ' }],
[0x74B, { name: 'OUT_RESERVED_74B', description: 'out reserved 74b DLC ' }],
[0x74C, { name: 'OUT_RESERVED_74C', description: 'out reserved 74c DLC ' }],
[0x74D, { name: 'OUT_RESERVED_74D', description: 'out reserved 74d DLC ' }],
[0x74E, { name: 'OUT_RESERVED_74E', description: 'out reserved 74e DLC ' }],
[0x74F, { name: 'OUT_RESERVED_74F', description: 'out reserved 74f DLC ' }],
















































[0x780, { name: 'BOX_SW_3GANG', description: '3 gang switch box, 2 high, 1 low DLC 6' }],
[0x781, { name: 'BOX_SW_4GANG', description: '4-gang switch box, 2 high, 2 low DLC 6' }],
[0x782, { name: 'BOX_SW_6GANG_HIGH', description: '6-gang switch box, 4 high, 2 low DLC 6' }],
[0x783, { name: 'BOX_SW_6GANG_LOW', description: '6-gang switch box, 2 high, 4 low DLC 6' }],
[0x784, { name: 'BOX_SW_2GANG_HIGH', description: '2-gang switch box, 2 high DLC 6' }],
[0x785, { name: 'BOX_SW_2GANG_LOW', description: '2-gang switch box, 2 low DLC 6' }],
[0x786, { name: 'BOX_MULTI_4XTEMP', description: '4-digital multi temp input box DLC 6' }],
[0x787, { name: 'BOX_SW_4RELAY', description: '4-gang relay output box DLC 6' }],
[0x788, { name: 'BOX_MULTI_TVA', description: 'temp, volt, current input box DLC 6' }],
[0x789, { name: 'BOX_SW_8RELAY', description: '8-gang relay output box DLC 6' }],
[0x78A, { name: 'BOX_MULTI_4X4IO', description: 'input - output box, 4 in, 4 out DLC 6' }],
[0x78B, { name: 'BOX_MULTI_IO', description: 'input - output box, multiple options DLC 6' }],
[0x78C, { name: 'BOX_RESERVED_78C', description: 'box reserved 78c DLC 6' }],
[0x78D, { name: 'BOX_RESERVED_78D', description: 'box reserved 78d DLC 6' }],
[0x78E, { name: 'BOX_RESERVED_78E', description: 'box reserved 78e DLC 6' }],
[0x78F, { name: 'BOX_RESERVED_78F', description: 'box reserved 78f DLC 6' }],
[0x790, { name: 'IFACE_8X4_ARGB_KEYPAD', description: '8x4 argb keypad DLC 6' }],
[0x791, { name: 'IFACE_4X4_ARGB_KEYPAD', description: '4x4 argb keypad DLC 6' }],
[0x792, { name: 'IFACE_TOUCHSCREEN_TYPE_A', description: 'touchscreen type a DLC 6' }],
[0x793, { name: 'IFACE_TOUCHSCREEN_TYPE_B', description: 'touchscreen type b DLC 6' }],
[0x794, { name: 'IFACE_NEXTION_TYPE_A', description: 'nextion type a DLC 6' }],
[0x795, { name: 'IFACE_NEXTION_TYPE_B', description: 'nextion type b DLC 6' }],
[0x796, { name: 'IFACE_RESERVED_796', description: 'iface reserved 796 DLC 6' }],
[0x797, { name: 'IFACE_RESERVED_797', description: 'iface reserved 797 DLC 6' }],
[0x798, { name: 'IFACE_RESERVED_798', description: 'iface reserved 798 DLC ' }],
[0x799, { name: 'IFACE_6_AXIS_IMU', description: '6 axis imu DLC 6' }],
[0x79A, { name: 'IFACE_3X5_BUTTON_BOX', description: '3x5 button box DLC 6' }],
[0x79B, { name: 'IFACE_4X6_BUTTON_BOX', description: '4x6 button box DLC 6' }],
[0x79C, { name: 'IFACE_RESERVED_79C', description: 'iface reserved 79c DLC ' }],
[0x79D, { name: 'IFACE_RESERVED_79D', description: 'iface reserved 79d DLC ' }],
[0x79E, { name: 'IFACE_RESERVED_79E', description: 'iface reserved 79e DLC ' }],
[0x79F, { name: 'IFACE_RESERVED_79F', description: 'iface reserved 79f DLC ' }]
]);
