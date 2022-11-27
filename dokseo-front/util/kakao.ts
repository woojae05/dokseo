export const kakaoInit = () => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
        kakao.init('d85d5a214f496555384f1394e80335ba');
    }

    return kakao;
}
