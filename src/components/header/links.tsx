import { Globe, Home, Info, Mail } from "lucide-react";

import { aboutUrl, contactUrl, homeUrl, projectsUrl } from "@/constants";

export const navlinks = [
   { title: "Home", href: homeUrl, Icon: Home },
   { title: "About", href: aboutUrl, Icon: Info },
   { title: "Projects", href: projectsUrl, Icon: Globe },
   { title: "Contact", href: contactUrl, Icon: Mail },
];
