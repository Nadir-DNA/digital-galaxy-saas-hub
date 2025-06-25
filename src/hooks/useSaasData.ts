
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SaasTool {
  id: string;
  title: string;
  url: string;
  tags: string[];
  description: string;
  promo_code: string;
  created_at: string;
}

export const useSaasData = () => {
  const [saasData, setSaasData] = useState<SaasTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSaasData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('saas_tools')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          throw error;
        }

        setSaasData(data || []);
      } catch (err) {
        console.error('Error fetching SaaS data:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchSaasData();
  }, []);

  // Get unique tags from all SaaS tools
  const getAllTags = () => {
    const allTags = saasData.flatMap(saas => saas.tags);
    return ['All', ...Array.from(new Set(allTags))];
  };

  return {
    saasData,
    loading,
    error,
    getAllTags
  };
};
