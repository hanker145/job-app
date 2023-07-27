import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import api from "../data/fetchData";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Auth from "../auth/auth";

const CenterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center"
  }
}));
function Home() {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      const { jobs: fetchedJobs, pagesTotal } = await api.getJobs(
        currentPage,
        searchQuery
      );
      setJobs(fetchedJobs);
      setTotalPages(pagesTotal);
      setIsLoading(false);
    };
    fetchJobs();
  }, [currentPage, searchQuery]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      {isLoading ? (
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          Loading...
        </Typography>
      ) : jobs.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid key={job.id} item lg={3} md={4} sm={6} xs={12}>
                <JobCard
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  skills={job.skills}
                />
              </Grid>
            ))}
          </Grid>
          <CenterPagination
            sx={{ marginTop: "15px" }}
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
        </>
      ) : (
        <Typography>No Results Found</Typography>
      )}
    </Container>
  );
}

export default Home;
