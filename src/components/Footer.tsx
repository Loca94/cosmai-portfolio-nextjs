import Container from '@/components/Container';
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Button } from './ui/Button';
import Link from 'next/link';
import clsx from 'clsx';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 pt-6">
      <Container className="text-slate-400">
        <div className="mt-16">
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <div className="space-y-5 font-light max-md:text-center">
              <h3 className="text-lg">Sara Cosmai</h3>
              <div className="text-sm">
                <p>UI-UX Designer based in Aosta, Italy</p>
                <p>Background in visual design, motion design</p>
              </div>
              <Button
                variant="link"
                asChild
                className="px-0 text-lg font-medium max-md:mx-auto"
              >
                <a
                  href="https://www.saracosmai.com/resume.pdf"
                  className="block w-fit"
                >
                  Resume
                </a>
              </Button>
              <p className="text-sm font-normal">
                &copy; {currentYear} Sara Cosmai
              </p>
            </div>

            {/* Social Links */}
            <ul
              role="list"
              className="flex flex-row justify-center space-x-6 pb-12 md:flex-col md:space-x-0 md:space-y-4 md:pb-0"
            >
              <SocialLink
                href="https://www.linkedin.com/in/sara-cosmai-designer/"
                icon={LinkedInIcon}
                tooltip="LinkedIn"
              />
              <SocialLink
                href="https://dribbble.com/WhatEverSara"
                icon={InstagramIcon}
                tooltip="Dribbble"
              />
              <SocialLink
                href="https://www.instagram.com/saracosmai/"
                icon={InstagramIcon}
                tooltip="Instagram"
              />
              <SocialLink
                href="mailto:sarah.cosmai@gmail.com"
                icon={MailIcon}
                tooltip="Email"
              />
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  className,
  href,
  icon: Icon,
  tooltip,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tooltip?: string;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href={href} target="_blank" className="group">
              <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-slate-200" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
}
