async function waitByMilliseconds(milliseconds: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}

export default waitByMilliseconds
