'use client';

import React, { useRef, useState } from 'react';
import {
  Code,
  Zap,
  Layers,
  Code2,
  Terminal,
  Smartphone,
  Network,
  Workflow,
  GitBranch,
  Cloud,
  Users,
  Database,
  LucideIcon
} from 'lucide-react';

interface StackCardProps {
  name: string;
  icon: LucideIcon;
  color?: string;
}

export function StackCard({ name, icon: Icon, color = 'cyan' }: StackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseEnter = () => {
    setIsMoving(true);
  };

  const handleMouseLeave = () => {
    setIsMoving(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isMoving) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate distance from center
    const distX = mouseX - centerX;
    const distY = mouseY - centerY;

    // Calculate direction (opposite to mouse)
    const distance = Math.sqrt(distX * distX + distY * distY);
    const maxDistance = Math.max(centerX, centerY);

    // Normalize and reverse direction (element flees from mouse)
    const escapeStrength = Math.max(0, 1 - distance / maxDistance);
    const moveX = (distX / distance || 0) * escapeStrength * -42;
    const moveY = (distY / distance || 0) * escapeStrength * -42;

    setPosition({ x: moveX, y: moveY });
  };

  return (
    <div
      ref={cardRef}
      className="stack-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isMoving ? 'none' : 'transform 0.3s ease-out'
      }}
    >
      <Icon size={20} className={`stack-icon icon-${color}`} />
      <span>{name}</span>
    </div>
  );
}

// Stack data with icons
export const stacksData = [
  { name: 'Next.js', icon: Code },
  { name: 'React', icon: Zap },
  { name: 'WordPress', icon: Layers },
  { name: 'PHP', icon: Code2 },
  { name: 'Python', icon: Terminal },
  { name: 'Flutter', icon: Smartphone },
  { name: 'APIs', icon: Network },
  { name: 'n8n', icon: Workflow },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Vercel', icon: Cloud },
  { name: 'CRM', icon: Users },
  { name: 'ERP', icon: Database }
];
