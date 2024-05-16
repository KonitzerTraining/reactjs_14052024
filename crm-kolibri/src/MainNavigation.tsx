import { KolNav } from "@public-ui/react";

export function MainNavigation() {
    return (


<KolNav
	_label="Navigation"
    _orientation="horizontal"
	_links="[
    {
      '_href': '/',
      '_icons': 'codicon codicon-home',
      '_label': 'Start'
    },
    {
      '_href': '/dashboard',
      '_icons': 'codicon codicon-home',
      '_label': 'Dashboard'
    },
    {
        '_href': '/about',
        '_icons': 'codicon codicon-home',
        '_label': 'About'
      },
      
    {
        '_href': '/help',
        '_icons': 'codicon codicon-home',
        '_label': 'Help'
      }
  ]"
	_has-compact-button
></KolNav>

    );
}