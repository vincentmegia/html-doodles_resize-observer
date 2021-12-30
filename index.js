const boxElement = document.querySelector(".box")

const resizeObserver = new ResizeObserver(entries => {
    const box = entries[0]
    console.log('box properties changed: ', box.contentRect)
})
resizeObserver.observe(boxElement)