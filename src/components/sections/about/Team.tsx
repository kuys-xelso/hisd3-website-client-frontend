import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
("use client");

import { useQuery } from "@apollo/client/react";
import { GET_TEAM_MEMBERS } from "@/graphql/queries";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "@/components/NewIcons";

export const Team = () => {
  const { data, loading, error } = useQuery(GET_TEAM_MEMBERS);

  if (loading)
    return (
      <Section
        size="lg"
        className="text-center text-muted-foreground animate-pulse"
      >
        <Container>Loading our team...</Container>
      </Section>
    );

  if (error)
    return (
      <Section size="lg" className="text-center text-red-500">
        <Container>Failed to load team members.</Container>
      </Section>
    );

  const teamList = data?.teamMembers || [];

  return (
    <Section size="none" id="team">
      <Container className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto px-4 lg:px-8 xl:px-16">
          {/* HEADER */}
          <div className="flex flex-col items-center justify-center gap-16">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="max-w-xl mx-auto flex flex-col items-center text-center gap-4"
            >
              <Badge variant="outline" className="px-3 py-1 h-auto text-sm">
                Team
              </Badge>

              <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                  Meet our team
                </h2>

                <p className="text-base text-muted-foreground">
                  Our team is committed to redefining digital experiences
                  through innovative technology and collaboration.
                </p>
              </div>
            </motion.div>

            {/* TEAM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {teamList.map((member: any, index: number) => {
                const socials =
                  typeof member.socials === "string"
                    ? JSON.parse(member.socials)
                    : member.socials || {};

                const socialLinks = [
                  socials.facebook && {
                    icon: <FacebookIcon className="w-4 h-4" />,
                    link: socials.facebook,
                  },
                  socials.linkedin && {
                    icon: <LinkedinIcon className="w-4 h-4" />,
                    link: socials.linkedin,
                  },
                  socials.github && {
                    icon: <GithubIcon className="w-4 h-4" />,
                    link: socials.github,
                  },
                ].filter(Boolean);

                return (
                  <motion.div
                    key={member.id}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group flex flex-col items-start gap-6"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-80 overflow-hidden rounded-lg">
                      <img
                        src={member.image || "https://github.com/shadcn.png"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />

                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-gray-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5">
                        <div className="flex gap-2">
                          {socialLinks.map((social: any, idx: number) => (
                            <a
                              key={idx}
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-fit bg-background p-3 rounded-full hover:opacity-80 transition"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-foreground">
                        {member.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
