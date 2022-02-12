import { getClientInformation } from '../../api';

export const stalking = async (args: string[]): Promise<string> => {
  const jsonClientInfo = await getClientInformation();
  try {
    if (jsonClientInfo.security.is_vpn) { // Using VPN :(
      return `
      It looks like you are using a VPN. That is no fun when stalking... >:(

      Now I can say something about the VPN you are using:
      
      With your dirty VPN your IP- ${jsonClientInfo.ip_address}.

      Pretending you are in ${jsonClientInfo.city}.
      That is in the region/province ${jsonClientInfo.region} (region ISO code ${jsonClientInfo.region_iso_code}).
      The postal code in that fake location of yours is ${jsonClientInfo.postal_code}.
      This is in the country ${jsonClientInfo.country}.
      And ofcourse on the continent ${jsonClientInfo.continent}.

      If you turn off I can stalk you better :-)
      `;
    } else { // Not using VPN
      return `
      So I tried stalking you and this is what I could find:
      
      Assuming you have the IP-address ${jsonClientInfo.ip_address}, this is what I could find:

      You are in the city ${jsonClientInfo.city}.
      That is in the region/province ${jsonClientInfo.region} (region ISO code ${jsonClientInfo.region_iso_code}).
      Your postal code is something like ${jsonClientInfo.postal_code}.
      This is in the country ${jsonClientInfo.country}.
      And ofcourse on the continent ${jsonClientInfo.continent}.
      `;
    }
  } catch {
    return "Something went wrong while stalking... :(";
  }

}
