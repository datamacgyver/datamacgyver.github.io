---
title: Great Expectations Implementation for a Major UK Fashion Retailer
description: How I led the design and implementation of a new Snowflake data platform with dbt, Great Expectations, and Azure DevOps to improve data quality, accelerate analytics, and foster a culture of data ownership.
tags: [data engineering, great expectations, snowflake, dbt, azure, terraform, data quality, genai, portfolio]
date: 2025-11-13
author: Rob Mansfield
sidebar_position: 1
---

## TL;DR

I led the architecture and delivery of a new Snowflake-based data platform for a major UK fashion retailer. The solution used **dbt**, **Great Expectations**, and **Azure DevOps** to automate data quality and improve governance. By introducing **AI-assisted code generation** and embedding validation at ingest and egress, we reduced downtime, improved data accuracy, and cut analytics turnaround time from a day to just hours.

---

## Case Study

When I joined this project in 2022, the client was migrating from an ageing SQL Server system to a new, centralised data estate on **Snowflake**. The aim was to consolidate disparate systems into a single, governed, and documented data source, reducing duplication and enabling faster, more reliable analytics.

### My Role

I served as **architect, technical lead, and consultant**, responsible for the end-to-end design and implementation of the new data platform. I managed a team of eight engineers and analysts, coordinating delivery, architecture decisions, and stakeholder engagement across business and technology functions. My role extended beyond the technical work to include bringing the organisation along in its shift towards data ownership and modern engineering practices.

### Technical Approach

We implemented a **modular dbt pipeline** that handled transformations, validation, and data product creation. I designed the pipeline to be **idempotent** and fully **CI/CD enabled** through **Azure DevOps**, ensuring consistent deployments across environments. 

Data quality was a key focus. I led the design and rollout of **Great Expectations**, embedding it directly into the **ingest and egress layers** of the data flow. This allowed validation checks to run automatically as part of the pipeline, ensuring that inaccurate or incomplete data could not propagate downstream.

The infrastructure was provisioned using **Terraform**, orchestrated by **Airflow**, and supported by **Azure Function Apps** and **Azure SQL Databases** where appropriate. This combination provided scalability and resilience, while reducing operational burden.

### GenAI Integration

Midway through the project, we became one of the first teams in our organisation to integrate **Generative AI** into delivery workflows. I developed a structured process where we used AI to **analyse legacy code**, **review migration logic**, and **generate first drafts** of dbt CTEs, Terraform modules, and Great Expectations suites. This accelerated development while maintaining architectural oversight and human validation.

### Business Impact

The migration had measurable outcomes:

- **Analytics production time** dropped from nearly a full day to a few hours, thanks to the decoupling of compute and storage.
- **Data quality improved significantly**, with errors caught early in the pipeline rather than discovered downstream.
- **Regulatory and financial risk** was reduced, as inaccurate finance data had previously threatened compliance for a publicly listed company.
- **Hundreds of hours of person-time** were saved due to reduced downtime and more efficient workflows.
- **Team efficiency improved**, as the new system required fewer staff to maintain stability, freeing up capacity for innovation.
- The work also **shifted culture** towards collaboration and accountability, as data ownership became clearer and more visible across business units.

### Reflection

This project demonstrated the value of combining modern data tooling with strong governance and cultural change. Embedding data quality into the core pipeline not only improved reliability but also built confidence in the platform across departments. Introducing GenAI into our workflow was a turning point, showing how automation and oversight can coexist effectively in complex data engineering projects.

---
