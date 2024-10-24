try {
  window.ge = window.gravityEngine
  window.ge.init({
    autoTrack: {
      pageShow: true,
      pageHide: true,
    },
    mode: 'none',
    showLog: false,
    accessToken: import.meta.env.VITE_GE_ACCESS_TOKEN,
  })
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
