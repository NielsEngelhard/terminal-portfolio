import * as bin from './index';
import packageJson from '../../../package.json';
import * as generators from '../../functions/generators';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:engelhardniels@gmail.com');

  return 'Opening mailto:engelhardniels@gmail.com...';
};

export const generate = async (args?: string[]): Promise<string> => {
  const availableGenerators = Object.keys(generators).sort().join('\n');
  switch(args[0]) {
    case "guid": {
      return generators.guid();
    }
    case "username": {
      return generators.username();
    }

    default: {
      if (`${args[0]}` === 'undefined') {
        return `You must specify an concept to generate e.g. 'animal guid'. Available things to generate:\n${availableGenerators}\n\n[tab]\t `;
      } else {
        return `The concept '${args[0]}' does not exist in the list of options. Available generators:\n${availableGenerators}\n\n[tab]\t `;
      }
    }
  }
}

export const banner = (args?: string[]): string => {
  return `
  /$$   /$$ /$$           /$$                 /$$$$$$$$                                /$$ /$$                                 /$$
  | $$$ | $$|__/          | $$                | $$_____/                              | $$| $$                                | $$
  | $$$$| $$ /$$  /$$$$$$ | $$  /$$$$$$$      | $$       /$$$$$$$   /$$$$$$   /$$$$$$ | $$| $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
  | $$ $$ $$| $$ /$$__  $$| $$ /$$_____/      | $$$$$   | $$__  $$ /$$__  $$ /$$__  $$| $$| $$__  $$ |____  $$ /$$__  $$ /$$__  $$
  | $$  $$$$| $$| $$$$$$$$| $$|  $$$$$$       | $$__/   | $$  \ $$| $$  \ $$| $$$$$$$$| $$| $$  \ $$  /$$$$$$$| $$  \__/| $$  | $$
  | $$\  $$$| $$| $$_____/| $$ \____  $$      | $$      | $$  | $$| $$  | $$| $$_____/| $$| $$  | $$ /$$__  $$| $$      | $$  | $$
  | $$ \  $$| $$|  $$$$$$$| $$ /$$$$$$$/      | $$$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$$| $$| $$  | $$|  $$$$$$$| $$      |  $$$$$$$
  |__/  \__/|__/ \_______/|__/|_______/       |________/|__/  |__/ \____  $$ \_______/|__/|__/  |__/ \_______/|__/       \_______/
                                                                   /$$  \ $$                                                      
                                                                  |  $$$$$$/                                                      
                                                                   \______/                                                       

To see a list of supported commands, run:
  help

--
Welcome to my portfolio website. Feel free to explore!
--
`;
};
