import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function pageAnimation(element, initialPosition) {
    const timeLine = gsap.timeline({ defaults: { duration: 1.5 }, paused: true })

    const animation = timeLine.fromTo(element, {
        y: initialPosition,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })

    // Usei o setTimeout para executar a animação após o carregamento inicial da página, evitando bug visual.
    setTimeout(() => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            end: 'bottom top',
            markers: false,
            onEnter: () => animation.play(),
            //onLeaveBack: () => animation.pause().reverse() // Volta ao estado inicial quando rola para cima.
            onLeaveBack: () => animation.reverse()
        })
    }, 400)
}
