import * as experiences from '../../functions/experiences';

export const experience = async (args?: string[]): Promise<string> => {
    const availableExperiences = Object.keys(experiences).sort().join('\n');
    switch(args[0]) {
        case "languages": {
            return experiences.languages();
          }
          case "azure": {
            return experiences.azure();
          }
          case "data": {
            return experiences.data();
          }
          case "IDE": {
            return experiences.IDE();
          }
          case "summary": {
            return experiences.summary();
          }
      
          default: {
            if (`${args[0]}` === 'undefined') {
              return `You must specify an experience to print e.g. 'experience languages'. Available experiences:\n${availableExperiences}\n\n[tab]\t `;
            } else {
              return `The experience '${args[0]}' is not a currently available experience. Available experiences:\n${availableExperiences}\n\n[tab]\t `;
            }
          }
    }
}