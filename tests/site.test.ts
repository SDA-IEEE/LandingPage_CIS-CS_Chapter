import { describe, it, expect } from 'vitest';
import { siteConfig } from '../src/data/site';

describe('Site configuration verification', () => {
    it('should have the official chapter name', () => {
        expect(siteConfig.name).toBe('IEEE CS & CIS UTB');
    });

    it('should use HTTPS for the site URL', () => {
        expect(siteConfig.url.startsWith('https://')).toBe(true);
    });

    it('should have primary social media profiles configured', () => {
        expect(siteConfig.socials.instagram).toBeDefined();
        expect(siteConfig.socials.linkedin).toBeDefined();
        expect(siteConfig.socials.github).toBeDefined();
    });
});
