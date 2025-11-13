---
title: Insurance Data Platform Overhaul
description: Leading the recovery and rebuild of a major insurer’s data platform, introducing semantic search and Snowflake-driven analytics.
tags: [data architecture, delivery leadership, elasticsearch, snowflake, aws, terraform, data science, insurance]
date: 2025-11-12
author: Rob Mansfield
sidebar_position: 1
draft: false
---

## TL;DR
I took over a failing data platform initiative for a specialist insurer, stabilised delivery, and guided the rebuild of their data and analytics ecosystem. The solution combined Snowflake, Elasticsearch, and AWS-native microservices. We cut analyst time by an order of magnitude, enabled semantic search across tens of thousands of documents, and laid the foundations for a data-driven culture across actuarial and business teams.

---

## Insurance Data Platform Overhaul

When I joined the project, the situation was already difficult. The system architecture was costly, poorly documented, and didn’t produce clear business value. The development team was demoralised and the client was frustrated. My first task as **delivery lead** was to triage the project—both technically and organisationally—and to get delivery back on track.

### Stabilising the Project
The previous solution was heading towards a complete rebuild with no incremental value. Instead, I introduced a pragmatic principle: *if you touch it, you fix it*. This approach kept momentum while ensuring technical debt was addressed gradually. I worked closely with the tech leads to review the architecture and plan staged improvements, ensuring each change aligned with a clear business outcome.

I also focused on rebuilding team trust and morale. We moved to an agile rhythm with visible progress and shared ownership. Over time, I transitioned into the **product owner** role, defining priorities around measurable business impact.

### Technical Recovery and Redesign
The platform ran on **AWS**, deployed through **Terraform**, and followed a **microservices** design. My technical involvement focused on the **Elasticsearch-based semantic search layer**, which became the differentiator for the platform. We processed tens of thousands of unstructured documents using a text extraction and indexing pipeline, transforming a static document archive into a searchable data asset.

In parallel, the data engineering team deployed **Snowflake**, replacing a complex and expensive Spark workload. This brought scalable storage and performance improvements while simplifying data management.

### Empowering the Business
The rebuilt architecture enabled broad **data democratisation**. We connected the Snowflake environment to **Power BI** and **Dataiku**, allowing non-technical users to explore and model data without relying on central teams. Alongside this, I helped define a **Target Operating Model** that distributed data ownership and established best practice for analysis and governance.

These changes accelerated insight generation across the insurer’s actuarial and risk teams. Analysts who previously spent weeks finding and reconciling data could now produce insights in hours. Data scientists gained access to richer, better-structured data, reducing daily manual effort by several hours.

### Outcomes
Within six months, the project was fully stabilised and delivering value. The insurer achieved:

- **10x reduction in analyst time** for key workflows  
- **Improved risk and exposure visibility**, identifying millions in potential liabilities  
- **Faster actuarial analysis**, reducing manual effort by hours each day  
- **Empowered business teams**, through direct access to clean, indexed data  
- **A sustainable, extensible platform** for future analytics and AI initiatives  

---

By the end of the engagement, the data and data science functions had both matured and expanded, hiring new specialists to build on the foundation we created. What began as a rescue turned into a long-term success, with a stable architecture, clear ownership, and a measurable business impact.
