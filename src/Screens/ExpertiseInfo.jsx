import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function ExpertiseInfo() {
  const params = useParams();
  const { state } = useLocation();

  return (
    <div>
      ExpertiseInfo {params.id}
      {state?.el.title}
    </div>
  );
}
