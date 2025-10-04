export const isMobileScreen = () => {
  if (typeof window === 'undefined') {
    return false // 서버 환경에서는 false 반환
  }
  return window.matchMedia('(max-width: 768px)').matches
}
