/* eslint-disable node/prefer-global/process */
/* eslint-disable no-console */

try {
  window.ge = window.gravityEngine

  console.log(process.env.GE_ACCESS_TOKEN)
  window.ge.init({
    autoTrack: {
      pageShow: true,
      pageHide: true,
    },
    mode: 'none',
    showLog: false,
    accessToken: process.env.GE_ACCESS_TOKEN,
  })
  window.ge.setSuperProperties({ data_version: 1 })
  window.ge.enableTracking(false) // 注册成功后再允许track
  window.ge
    .register({
      name: window.ge.getDeviceId(),
      version: 1,
    })
    .then(() => {
      window.ge.enableTracking(true)
    })
}
catch (error) {
  console.error(error)
}
