import * as asciianimals from '../../functions/asciianimals';

export const animal = async (args?: string[]): Promise<string> => {
    const availableAnimals = Object.keys(asciianimals).sort().join('\n');
    switch(args[0]) {
      case "monkey": {
        return asciianimals.monkey();
      }
      case "shark": {
        return asciianimals.shark();
      }
      case "elephant": {
        return asciianimals.elephant();
      }
      case "bear": {
        return asciianimals.bear();
      }
      case "sheep": {
        return asciianimals.sheep();
      }
      case "ducks": {
        return asciianimals.ducks();
      }
      case "beaver": {
        return asciianimals.beaver();
      }
      case "wolve": {
        return asciianimals.wolf();
      }
  
      default: {
        if (`${args[0]}` === 'undefined') {
          return `You must specify an animal to print e.g. 'animal monkey'. Available animals:\n${availableAnimals}\n\n[tab]\t `;
        } else {
          return `The animal '${args[0]}' does not exist in the list of options. Available animals:\n${availableAnimals}\n\n[tab]\t `;
        }
      }
    }
  }