export const ERROR_OVER_CURRENT = 0x100 /** error condition over current DLC 6 */
export const ERROR_OVER_TEMP = 0x101 /** error condition over temp DLC 6 */
export const ERROR_OVER_VOLT = 0x102 /** error condition over volt DLC 6 */











export const SW_RESERVED110 = 0x110 /** reserved 110 DLC  */
export const SW_RESERVED111 = 0x111 /** reserved 111 DLC  */
export const SW_SET_MODE = 0x112 /** set switch mode DLC 6 */
export const SW_SET_OFF = 0x113 /** switch off DLC 5 */
export const SW_SET_ON = 0x114 /** switch on DLC 5 */
export const SW_MOM_PRESS = 0x115 /** switch momentary press DLC 5 */
export const SW_SET_MOM_DUR = 0x116 /** set momentary switch duration ms DLC 7 */
export const SW_SET_PWM_DUTY = 0x117 /** switch set pwm duty DLC 7 */
export const SW_SET_PWM_FREQ = 0x118 /** switch set pwm freq DLC 7 */
export const SW_SET_BLINK_DELAY = 0x119 /** switch set blink delay in tenths of a second 1-100 DLC 7 */
export const SW_SET_STROBE_PAT = 0x11A /** switch set strobe pattern DLC 6 */
export const SW_SET_STATE_MEM = 0x11B /** enable / disable switch last state memory DLC 6 */













export const SET_DISPLAY_OFF = 0x200 /** set display off DLC 5 */
export const SET_DISPLAY_ON = 0x201 /** set display on DLC 5 */
export const SET_DISPLAY_CLEAR = 0x202 /** set display clear DLC 5 */
export const SET_DISPLAY_FLASH = 0x203 /** set display flash DLC 6 */
export const SET_DISPLAY_BACKLIGHT_COLOR = 0x204 /** set display backlight color DLC 7 */
export const SET_DISPLAY_BACKLIGHT_BRIGHTNESS = 0x205 /** set display backlight brightness DLC 6 */
export const REQ_DISPLAY_CONFIG = 0x206 /** req display config DLC 6 */
export const REQ_DISPLAY_DATA = 0x207 /** req display data DLC 6 */
export const SET_OLED_FIELD_COLOR = 0x208 /** set oled field color DLC 8 */
export const SET_OLED_FIELD_BLINK = 0x209 /** set oled field blink DLC 8 */
export const SET_OLED_FIELD_STROBE = 0x20A /** set oled field strobe DLC 8 */
export const SET_DISPLAY_RESERVED_20B = 0x20B /** set display reserved 20b DLC 8 */
export const SET_DISPLAY_RESERVED_20C = 0x20C /** set display reserved 20c DLC 8 */
export const DISPLAY_DATA_MSG = 0x20D /** display data msg DLC 8 */
export const DISPLAY_DATA_ACK = 0x20E /** display data ack DLC 8 */
export const SET_DISPLAY_RESERVED_20F = 0x20F /** set display reserved 20f DLC  */
export const SET_ARGB_STRIP_COLOR = 0x210 /** set argb strip color DLC  */
export const SET_ARGBW_STRIP_COLOR = 0x211 /** set argbw strip color DLC 7 */
export const SET_ANALOG_STRIP_COLOR = 0x212 /** set analog strip color DLC 7 */
export const SET_ADDR_STRIP_EFFECT = 0x213 /** set addr strip effect DLC 7 */
export const SET_LED_STRIP_BRIGHTNESS = 0x214 /** set led strip brightness DLC 7 */
export const SET_LED_STRIP_OFF = 0x215 /** set led strip off DLC 7 */
export const SET_LED_STRIP_ON = 0x216 /** set led strip on DLC 5 */
export const SET_LED_RESERVED_217 = 0x217 /** set led reserved 217 DLC 5 */
export const SET_LED_RESERVED_218 = 0x218 /** set led reserved 218 DLC  */
export const SET_LED_RESERVED_219 = 0x219 /** set led reserved 219 DLC  */
export const SET_LED_RESERVED_21A = 0x21A /** set led reserved 21a DLC  */
export const SET_LED_RESERVED_21B = 0x21B /** set led reserved 21b DLC  */
export const SET_LED_RESERVED_21C = 0x21C /** set led reserved 21c DLC  */
export const SET_LED_RESERVED_21D = 0x21D /** set led reserved 21d DLC  */
export const SET_LED_RESERVED_21E = 0x21E /** set led reserved 21e DLC  */
export const SET_LED_RESERVED_21F = 0x21F /** set led reserved 21f DLC  */
export const SET_ARGB_BUTTON_COLOR = 0x220 /** set argb button color DLC  */
export const SET_ARGB_BUTTON_LED_MODE = 0x221 /** set argb button led mode DLC  */
export const SET_BUTTON_MODE = 0x222 /** set button mode 0 disabled, 1 toggle, 2 momentary DLC  */


















































export const ACK_INTRO = 0x400 /** acknowledge introduction, clear flag on remote device DLC 4 */
export const REQ_NODE_INTRO = 0x401 /** general intro request for all node types DLC 4 */
export const MSG_NORM_OPER = 0x402 /** message to all nodes to being normal operation, sent after introduction and enumeration are complete DLC 4 */
export const MSG_HALT_OPER = 0x403 /** message to all nodes to stop transmitting messages and wait for instructions DLC 4 */
export const REQ_NODECHECK = 0x404 /** remote nodes should respond with their node id and last boot timestamp DLC 4 */
export const REQ_HEALTHCHECK = 0x405 /** remote nodes should respond with diagnostic sensor data DLC 4 */
export const REQ_IFACE = 0x406 /** req interfaces node include buttons, displays leds and sensors DLC 4 */
export const REQ_SWITCHBOX = 0x407 /** req switch boxes nodes include anything that controls a load DLC 4 */




export const DATA_EPOCH = 0x40C /** epoch timestamp from controller DLC 8 */
export const DATA_SENSOR_MSG = 0x40D /** controller assigned message id to use for transferring sensor data range 72A:72F DLC 8 */


export const REQ_BUTTONS = 0x410 /** req buttons DLC 4 */
export const REQ_OUTPUTS = 0x411 /** req outputs DLC 4 */
export const REQ_DISPLAYS = 0x412 /** req displays DLC 4 */
export const REQ_TEMP_SENSOR = 0x413 /** req temp sensor DLC 4 */
export const REQ_VOLT_SENSOR = 0x414 /** req volt sensor DLC 4 */
export const REQ_AMP_SENSOR = 0x415 /** req amp sensor DLC 4 */
export const REQ_CLOSURE_INPUT = 0x416 /** req closure input DLC 4 */
export const REQ_AMBIENT_LIGHT = 0x417 /** req ambient light sensors DLC 4 */
export const REQ_IMU_SENSORS = 0x418 /** req imu sensors DLC 4 */

















export const DATA_BUTTON_DOWN = 0x500 /** button down DLC 7 */
export const DATA_BUTTON_UP = 0x501 /** button up DLC 7 */
export const DATA_KEYSWITCH_LOCK = 0x502 /** keyswitch lock DLC 7 */
export const DATA_KEYSWITCH_UNLOCK = 0x503 /** keyswitch unlock DLC 7 */
export const DATA_DIAL_CLOCKWISE = 0x504 /** dial clockwise DLC 7 */
export const DATA_DIAL_COUNTER_CLOCKWISE = 0x505 /** dial counter clockwise DLC 7 */
export const DATA_DIAL_CLICK = 0x506 /** dial click DLC 7 */
export const DATA_RFID_READ = 0x507 /** rfid read DLC 7 */
export const DATA_CONTACT_CLOSED = 0x508 /** contact closed DLC 7 */
export const DATA_CONTACT_OPENED = 0x509 /** contact opened DLC 7 */
export const DATA_INTERNAL_TEMPERATURE = 0x50A /** internal temperature DLC 7 */
export const DATA_INTERNAL_PCB_VOLTS = 0x50B /** internal pcb volts DLC 7 */
export const DATA_INTERNAL_PCB_CURRENT = 0x50C /** internal pcb current DLC 7 */
export const DATA_EXTERNAL_TEMPERATURE = 0x50D /** external temperature DLC 8 */
export const DATA_EXTERNAL_VOLTS = 0x50E /** external volts DLC 8 */
export const DATA_EXTERNAL_CURRENT = 0x50F /** external current DLC 8 */
export const DATA_AMBIENT_LIGHT_USE_PRIV_MSG = 0x510 /** ambient light USE PRIV MSG DLC 5 */
export const DATA_IMU_X_AXIS = 0x511 /** IMU X Axis USE PRIV MSG DLC 5 */
export const DATA_IMU_Y_AXIS = 0x512 /** IMU Y Axis USE PRIV MSG DLC 5 */
export const DATA_IMU_Z_AXIS = 0x513 /** IMU Z Axis USE PRIV MSG DLC 5 */
export const DATA_IMU_X_GYRO = 0x514 /** IMU X Gyro USE PRIV MSG DLC 5 */
export const DATA_IMU_Y_GYRO = 0x515 /** IMU Y Gyro USE PRIV MSG DLC 5 */
export const DATA_IMU_Z_GYRO = 0x516 /** IMU Z Gyro USE PRIV MSG DLC 5 */
export const DATA_IMU_TEMPERATURE = 0x517 /** IMU temperature DLC 8 */
export const DATA_ANALOG_KNOB_MV = 0x518 /** analog knob mv DLC 7 */
export const DATA_OUTPUT_SWITCH_MOM_PUSH = 0x519 /** output switch mom push DLC 7 */
export const DATA_NODE_CPU_TEMP = 0x51A /** node cpu temp DLC 7 */
export const DATA_NODE_LAST_BOOT_TIMESTAMP = 0x51B /** node last boot timestamp DLC 8 */
export const DATA_NODE_PCB_TEMP = 0x51C /** node pcb temp DLC 6 */
export const DATA_OUTPUT_SWITCH_STATE = 0x51D /** output switch state DLC 5 */
export const DATA_RESERVED_51E = 0x51E /** data reserved 51e DLC 5 */
export const DATA_OUTPUT_SWITCH_MODE = 0x51F /** output switch mode DLC 6 */
export const DATA_DISPLAY_OFF = 0x520 /** display off DLC 5 */
export const DATA_DISPLAY_ON = 0x521 /** display on DLC 5 */
export const DATA_DISPLAY_CLEAR = 0x522 /** display clear DLC 5 */
export const DATA_DISPLAY_MODE = 0x523 /** display mode DLC 6 */
export const DATA_ARGB_BUTTON_COLOR = 0x524 /** argb button color DLC 7 */
export const DATA_ARGB_BUTTON_LED_MODE = 0x525 /** argb button led mode DLC 7 */




export const DATA_RESERVED_52A = 0x52A /** 0x52A reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_52B = 0x52B /** 0x52B reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_52C = 0x52C /** 0x52C reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_52D = 0x52D /** 0x52D reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_52E = 0x52E /** 0x52E reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_52F = 0x52F /** 0x52F reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_530 = 0x530 /** 0x530 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_531 = 0x531 /** 0x531 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_532 = 0x532 /** 0x532 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_533 = 0x533 /** 0x533 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_534 = 0x534 /** 0x534 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_535 = 0x535 /** 0x535 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_536 = 0x536 /** 0x536 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_537 = 0x537 /** 0x537 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_538 = 0x538 /** 0x538 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_539 = 0x539 /** 0x539 reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53A = 0x53A /** 0x53A reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53B = 0x53B /** 0x53B reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53C = 0x53C /** 0x53C reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53D = 0x53D /** 0x53D reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53E = 0x53E /** 0x53E reserved private msg for 64-bit sensor data DLC 8 */
export const DATA_RESERVED_53F = 0x53F /** 0x53F reserved private msg for 64-bit sensor data DLC 8 */

























export const DISP_ANALOG_LED_STRIP = 0x700 /** analog led strip DLC 8 */
export const DISP_ARGBW_LED_STRIP = 0x701 /** argbw led strip DLC 8 */
export const DISP_ARGB_LED_STRIP = 0x702 /** argb led strip DLC 8 */
export const DISP_RESERVED_703 = 0x703 /** disp reserved 703 DLC 8 */
export const DISP_RESERVED_704 = 0x704 /** disp reserved 704 DLC 8 */
export const DISP_OLED = 0x705 /** non-touch oled display DLC 8 */
export const DISP_RESERVED_706 = 0x706 /** disp reserved 706 DLC 8 */
export const DISP_LCD = 0x707 /** non-touch lcd display DLC 8 */
export const DISP_RESERVED_708 = 0x708 /** disp reserved 708 DLC  */
export const DISP_RESERVED_709 = 0x709 /** disp reserved 709 DLC  */
export const DISP_RESERVED_70A = 0x70A /** disp reserved 70a DLC  */
export const DISP_RESERVED_70B = 0x70B /** disp reserved 70b DLC  */
export const DISP_RESERVED_70C = 0x70C /** disp reserved 70c DLC  */
export const DISP_RESERVED_70D = 0x70D /** disp reserved 70d DLC  */
export const DISP_RESERVED_70E = 0x70E /** disp reserved 70e DLC  */
export const DISP_RESERVED_70F = 0x70F /** disp reserved 70f DLC  */
export const INPUT_NO_BACKLIGHT = 0x710 /** input no backlight DLC 7 */
export const INPUT_ARGB_BACKLIGHT = 0x711 /** input argb backlight DLC 7 */
export const INPUT_ANALOG_BACKLIGHT = 0x712 /** input analog backlight DLC 7 */
export const INPUT_VIRTUAL = 0x713 /** input virtual DLC 7 */
export const INPUT_WITH_DISPLAY = 0x714 /** input with display DLC 7 */
export const INPUT_ANALOG_KNOB = 0x715 /** analog knob input DLC 7 */
export const INPUT_JOG_DIAL_CLICK = 0x716 /** jog dial with click DLC 7 */
export const INPUT_KEY_SWITCH = 0x717 /** key switch DLC 7 */
export const INPUT_MOTION_DET = 0x718 /** motion detector DLC 7 */
export const INPUT_CAP_TOUCH = 0x719 /** capacitive touch switch stand-alone DLC 7 */
export const INPUT_JOG_DIAL_NOCLICK = 0x71A /** jog dial without click DLC 7 */
export const INPUT_RFID_READER = 0x71B /** RFID reader input DLC 7 */
export const BUTTON_CONTACT_PULL_DOWN = 0x71C /** button contact pull down DLC 7 */
export const INPUT_CONTACT_PULL_UP = 0x71D /** input contact pull up DLC 7 */
export const INPUT_RESERVED_71E = 0x71E /** input reserved 71e DLC 5 */
export const INPUT_RESERVED_71F = 0x71F /** input reserved 71f DLC 5 */
export const INPUT_DIGITAL_TEMP = 0x720 /** input digital temp DLC 5 */
export const INPUT_K_TYPE_TEMP = 0x721 /** input k type temp DLC 5 */
export const NODE_LASTBOOT = 0x722 /** last boot timestamp DLC 5 */
export const NODE_PCB_TEMP = 0x723 /** node pcb temp DLC 5 */
export const NODE_CPU_TEMP = 0x724 /** node cpu temp DLC 5 */
export const INPUT_EXT_VOLTAGE_SENSOR = 0x725 /** input ext voltage sensor DLC 5 */
export const NODE_INT_VOLTAGE_SENSOR = 0x726 /** node int voltage sensor DLC 5 */
export const NODE_INT_CURRENT_SENSOR = 0x727 /** node int current sensor DLC 5 */
export const INPUT_EXT_CURRENT_SHUNT = 0x728 /** input ext current shunt DLC 5 */
export const INPUT_EXT_CURRENT_HALL = 0x729 /** input ext current hall DLC 5 */
export const SENSOR_RESERVED_72A = 0x72A /** sensor reserved 72a DLC 5 */
export const SENSOR_RESERVED_72B = 0x72B /** sensor reserved 72b DLC 5 */
export const SENSOR_RESERVED_72C = 0x72C /** sensor reserved 72c DLC 5 */
export const SENSOR_RESERVED_72D = 0x72D /** sensor reserved 72d DLC 5 */
export const SENSOR_RESERVED_72E = 0x72E /** sensor reserved 72e DLC 5 */
export const SENSOR_RESERVED_72F = 0x72F /** sensor reserved 72f DLC 5 */
export const INPUT_AMBIENT_LIGHT = 0x730 /** input ambient light DLC 5 */
export const IMU_X_AXIS_SENSOR = 0x731 /** IMU X Axis sensor DLC 5 */
export const IMU_Y_AXIS_SENSOR = 0x732 /** IMU Y Axis sensor DLC 5 */
export const IMU_Z_AXIS_SENSOR = 0x733 /** IMU Z Axis sensor DLC 5 */
export const IMU_X_GYRO_SENSOR = 0x734 /** IMU X Gyro sensor DLC 5 */
export const IMU_Y_GYRO_SENSOR = 0x735 /** IMU Y Gyro sensor DLC 5 */
export const IMU_Z_GYRO_SENSOR = 0x736 /** IMU Z Gyro sensor DLC 5 */
export const IMU_TEMP_SENSOR = 0x737 /** IMU temp sensor DLC 5 */
export const GPS_UTC_TIME = 0x738 /** GPS utc time DLC 5 */
export const GPS_LATITUDE = 0x739 /** GPS latitude DLC 5 */
export const GPS_NS_IND = 0x73A /** GPS NS IND DLC 5 */
export const GPS_LONGITUDE = 0x73B /** GPS longitude DLC 5 */
export const GPS_EW_IND = 0x73C /** GPS EW IND DLC 5 */
export const GPS_ALTITUDE = 0x73D /** GPS altitude DLC 5 */
export const GPS_STATUS = 0x73E /** GPS status DLC 5 */
export const SENSOR2_RESERVED_73F = 0x73F /** sensor2 reserved 73f DLC  */
export const OUT_HIGH_CURRENT_SW = 0x740 /** high current solid state switch DLC 6 */
export const OUT_LOW_CURRENT_SW = 0x741 /** low current solid state switch DLC 6 */
export const OUT_OPEN_DRAIN = 0x742 /** open drain output DLC 6 */
export const OUT_MECH_RELAY = 0x743 /** mechanical relay DLC 6 */
export const OUT_RESERVED_744 = 0x744 /** out reserved 744 DLC  */
export const OUT_RESERVED_745 = 0x745 /** out reserved 745 DLC  */
export const OUT_RESERVED_746 = 0x746 /** out reserved 746 DLC  */
export const OUT_RESERVED_747 = 0x747 /** out reserved 747 DLC  */
export const OUT_RESERVED_748 = 0x748 /** out reserved 748 DLC  */
export const OUT_RESERVED_749 = 0x749 /** out reserved 749 DLC  */
export const OUT_RESERVED_74A = 0x74A /** out reserved 74a DLC  */
export const OUT_RESERVED_74B = 0x74B /** out reserved 74b DLC  */
export const OUT_RESERVED_74C = 0x74C /** out reserved 74c DLC  */
export const OUT_RESERVED_74D = 0x74D /** out reserved 74d DLC  */
export const OUT_RESERVED_74E = 0x74E /** out reserved 74e DLC  */
export const OUT_RESERVED_74F = 0x74F /** out reserved 74f DLC  */
















































export const BOX_SW_3GANG = 0x780 /** 3 gang switch box, 2 high, 1 low DLC 6 */
export const BOX_SW_4GANG = 0x781 /** 4-gang switch box, 2 high, 2 low DLC 6 */
export const BOX_SW_6GANG_HIGH = 0x782 /** 6-gang switch box, 4 high, 2 low DLC 6 */
export const BOX_SW_6GANG_LOW = 0x783 /** 6-gang switch box, 2 high, 4 low DLC 6 */
export const BOX_SW_2GANG_HIGH = 0x784 /** 2-gang switch box, 2 high DLC 6 */
export const BOX_SW_2GANG_LOW = 0x785 /** 2-gang switch box, 2 low DLC 6 */
export const BOX_MULTI_4XTEMP = 0x786 /** 4-digital multi temp input box DLC 6 */
export const BOX_SW_4RELAY = 0x787 /** 4-gang relay output box DLC 6 */
export const BOX_MULTI_TVA = 0x788 /** temp, volt, current input box DLC 6 */
export const BOX_SW_8RELAY = 0x789 /** 8-gang relay output box DLC 6 */
export const BOX_MULTI_4X4IO = 0x78A /** input - output box, 4 in, 4 out DLC 6 */
export const BOX_MULTI_IO = 0x78B /** input - output box, multiple options DLC 6 */
export const BOX_RESERVED_78C = 0x78C /** box reserved 78c DLC 6 */
export const BOX_RESERVED_78D = 0x78D /** box reserved 78d DLC 6 */
export const BOX_RESERVED_78E = 0x78E /** box reserved 78e DLC 6 */
export const BOX_RESERVED_78F = 0x78F /** box reserved 78f DLC 6 */
export const IFACE_8X4_ARGB_KEYPAD = 0x790 /** 8x4 argb keypad DLC 6 */
export const IFACE_4X4_ARGB_KEYPAD = 0x791 /** 4x4 argb keypad DLC 6 */
export const IFACE_TOUCHSCREEN_TYPE_A = 0x792 /** touchscreen type a DLC 6 */
export const IFACE_TOUCHSCREEN_TYPE_B = 0x793 /** touchscreen type b DLC 6 */
export const IFACE_NEXTION_TYPE_A = 0x794 /** nextion type a DLC 6 */
export const IFACE_NEXTION_TYPE_B = 0x795 /** nextion type b DLC 6 */
export const IFACE_RESERVED_796 = 0x796 /** iface reserved 796 DLC 6 */
export const IFACE_RESERVED_797 = 0x797 /** iface reserved 797 DLC 6 */
export const IFACE_RESERVED_798 = 0x798 /** iface reserved 798 DLC  */
export const IFACE_6_AXIS_IMU = 0x799 /** 6 axis imu DLC 6 */
export const IFACE_3X5_BUTTON_BOX = 0x79A /** 3x5 button box DLC 6 */
export const IFACE_4X6_BUTTON_BOX = 0x79B /** 4x6 button box DLC 6 */
export const IFACE_RESERVED_79C = 0x79C /** iface reserved 79c DLC  */
export const IFACE_RESERVED_79D = 0x79D /** iface reserved 79d DLC  */
export const IFACE_RESERVED_79E = 0x79E /** iface reserved 79e DLC  */
export const IFACE_RESERVED_79F = 0x79F /** iface reserved 79f DLC  */