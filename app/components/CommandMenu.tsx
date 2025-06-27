'use client';

import * as React from "react";
import {
  Code,
  BookOpen,
  Users,
  Info,
  Mail,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  FileCode,
  Bookmark,
  GraduationCap,
  Heart
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Open command menu with ⌘K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
        return;
      }

      // Only handle shortcuts when command menu is open
      if (!open) return;

      // Navigation shortcuts
      if ((e.metaKey || e.ctrlKey) && navigationItems.some(item => item.shortcut?.toLowerCase() === e.key.toLowerCase())) {
        e.preventDefault();
        const item = navigationItems.find(item => item.shortcut?.toLowerCase() === e.key.toLowerCase());
        if (item) {
          handleSelect(item.href);
        }
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [onOpenChange, open]);

  if (!mounted) {
    return null;
  }

  const navigationItems = [
    {
      href: "https://projects.prodevopsguytech.com/",
      label: "Projects",
      icon: Code,
      shortcut: "P",
      isExternal: true
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      shortcut: "R",
      isExternal: false
    },
    {
      href: "/learning-paths",
      label: "Learning Paths",
      icon: GraduationCap,
      shortcut: "L",
      isExternal: false
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      shortcut: "C",
      isExternal: false
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
      shortcut: "A",
      isExternal: false
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      shortcut: "M",
      isExternal: false
    }
  ];

  const quickActions = [
    {
      href: "https://projects.prodevopsguytech.com/latest",
      label: "Latest Projects",
      icon: FileCode,
      isExternal: true
    },
    {
      href: "/resources/bookmarks",
      label: "Saved Resources",
      icon: Bookmark,
      isExternal: false
    },
    {
      href: "/learning-paths/recommended",
      label: "Recommended Paths",
      icon: Heart,
      isExternal: false
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/prodevopsguy",
      label: "GitHub",
      icon: Github,
      isExternal: true
    },
    {
      href: "https://twitter.com/prodevopsguy",
      label: "Twitter",
      icon: Twitter,
      isExternal: true
    },
    {
      href: "https://linkedin.com/in/prodevopsguy",
      label: "LinkedIn",
      icon: Linkedin,
      isExternal: true
    },
    {
      href: "https://youtube.com/c/prodevopsguy",
      label: "YouTube",
      icon: Youtube,
      isExternal: true
    },
    {
      href: "https://t.me/prodevopsguy",
      label: "Telegram",
      icon: MessageCircle,
      isExternal: true
    }
  ];

  const handleSelect = (href: string) => {
    // Close the command menu
    onOpenChange(false);

    // Add a small delay to allow the menu to close smoothly
    setTimeout(() => {
      // Handle external links
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        // Handle internal navigation
        router.push(href);
      }
    }, 100);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Command Menu</DialogTitle>
      <DialogDescription className="sr-only">
        Use the command menu to navigate the site, access quick actions, or visit our social links. Press ⌘K to open or close.
      </DialogDescription>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item.href)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.isExternal && (
                <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
              )}
              {item.shortcut && (
                <CommandShortcut>⌘{item.shortcut}</CommandShortcut>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          {quickActions.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item.href)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.isExternal && (
                <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Social Links">
          {socialLinks.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item.href)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
} 