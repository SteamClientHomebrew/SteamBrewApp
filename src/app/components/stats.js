"use client"

export default async () => 
{
    const discord = await fetch('https://discord.com/api/v9/invites/NcNMP6r2Cw?with_counts=true&with_expiration=true').then((response) => response.json());
    const github = await fetch("https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases").then((response) => response.json());

    var count = 0

    github.forEach((release) => {
        release.assets.forEach((asset) => {
            count += asset.download_count || 0;
        });
    });

    return {
        version: github[0].tag_name,
        download_count: count,
        server_members: discord.approximate_member_count
    }
}