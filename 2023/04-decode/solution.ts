function decode(message: string) {
  const getReverseWord = (message: string) => {
    let reverseWord = "";
    let startIndex: number | null = null;
    let endIndex: number | null = null;

    message.split("").forEach((letter, index) => {
      if (reverseWord === "") {
        if (letter === "(") startIndex = index;
        if (letter === ")") endIndex = index;

        if (startIndex !== null && endIndex !== null) {
          const cloneMessage = message;
          reverseWord = cloneMessage.slice(startIndex + 1, endIndex);
        }
      }
    });

    return reverseWord;
  };

  let result = message;

  while (result.includes("(")) {
    const reverseWord = getReverseWord(result);
    const correctWord = reverseWord.split("").reverse().join("");

    result = result.replace(`(${reverseWord})`, correctWord);
  }

  return result;
}
