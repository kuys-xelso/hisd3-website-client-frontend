import { useQuery } from "@apollo/client/react";
import { GET_TEAM_MEMBERS } from "@/graphql/queries";

export const useTeams = () => {
  const { data, loading, error, refetch } = useQuery(GET_TEAM_MEMBERS, {
    notifyOnNetworkStatusChange: true,
  });

  const teamMembers = data?.teamMembers || [];
  const hasTeamMembers = teamMembers.length > 0;

  return {
    teamMembers,
    hasTeamMembers,
    isLoading: loading,
    error,
    refetch,
  };
};
