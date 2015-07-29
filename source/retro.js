module.exports.init = function () {
  this.jsnes = new JSNES()
}

module.exports.get_system_info = function () {
  return {
    library_name: "jsnes",
    library_version: "0.0.0",
    valid_extensions: ".nes",
    need_fullpath: false,
    block_extract: false
  }
}

module.exports.get_system_av_info = function () {
  return {
    geometry: {
      base_width:,
      base_height:,
      max_width:,
      max_height:,
      aspect_ratio:
    },
    timing: {
      fps: 60,
      sample_rate: this.get_region() === this.REGION_NTSC ? 1789772.5 : 1773447.4
    }
  }
}

module.exports.set_video_refresh = function (fn) {
  
}

module.exports.set_audio_sample_batch = function (fn) {
  
}

module.exports.set_input_state = function (fn) {
  
}

module.exports.serialize = function () {
  return this.toJSON()
}

module.exports.unserialize = function (data) {
  this.fromJSON(data)
}

module.exports.reset = function () {
  this.jsnes.reset()
}

module.exports.load_game = function (data) {
  this.jsnes.loadRom(data)
}

module.exports.run = function () {
  this.jsnes.run()
}

module.exports.REGION_NTSC = "Murica"
module.exports.get_region = function () {return this.REGION_NTSC}

module.exports.set_environment = function () {}
module.exports.set_input_poll = function () {}
module.exports.set_audio_sample = function () {}
module.exports.set_controller_port_device = function () {}
module.exports.cheat_set = function () {}
module.exports.cheat_reset = function () {}
module.exports.load_game_special = function () {}
module.exports.set_environment = function () {}
module.exports.deinit = function () {}
