---
title: Demand Forecasting in Energy
description: Designing a unified data platform and forecasting solution for a major UK energy retailer
tags: [data architecture, forecasting, energy, snowflake, dbt, sagemaker]
date: 2025-11-12
author: Rob Mansfield
sidebar_position: 5
draft: false
---

## TL;DR
I led the design and delivery of a new data and forecasting architecture for a major UK energy retailer. The project replaced undocumented legacy systems with a unified, governed data platform built on Snowflake, dbt, and AWS SageMaker. It automated data corrections, improved reporting from days to hours, and laid the foundation for a >30% reduction in manual effort, supporting billions of pounds in energy trades.

---

## Demand Forecasting in Retail Energy

The client, a major UK energy retailer, needed a more reliable and transparent data platform to support their retail energy forecasting. Their existing setup was fragmented across multiple data sources, undocumented, and heavily reliant on manual workflows. These challenges were slowing forecasting, complicating governance, and increasing operational risk.

### My Role
I acted as strategic lead and data architect, responsible for designing the end-to-end architecture and aligning all technical and business stakeholders. This included defining the approach, choosing tools, and ensuring each part of the organisation understood and supported the plan. I stayed close to delivery teams, making sure design intent translated into working, maintainable systems.

### Technical Approach
We introduced a **single source of truth** for all data assets in Snowflake, using **dbt** to manage data modelling, transformations, and documentation. I advocated for dbt over the client’s existing Matillion stack, citing its superior CI/CD integration and data-as-code approach, which proved crucial for maintainability and governance.

Forecasting models, originally based on ARIMA time series with manual adjustments, were migrated and orchestrated in **AWS SageMaker** to improve scalability and performance. Dashboards were rebuilt in **Tableau**, powered by clean, documented data models that supported both operational and strategic forecasting.

### Data as a Product
We adopted a “data as a product” mindset, defining ownership boundaries, automated quality checks, and CI-driven deployments. This enabled a federated data engineering function that could scale while maintaining consistent standards and data contracts.

### Outcomes
Although the full business impact was realised after my engagement, the new architecture delivered immediate operational improvements:
- Reporting cycles reduced from days to hours  
- Forecasts became faster and more reliable, with maintained or improved accuracy  
- Automated data quality and correction workflows removed days of manual development effort  
- Ingest cadence scaled to minutes, supporting storage for tens to hundreds of billions of rows  
- Foundation established for a >30% reduction in manual processing, later achieved by the client  

### Reflection
This project reinforced how essential good data design is to forecasting accuracy and trust. Moving from a collection of disconnected scripts to a structured, version-controlled, and governed environment not only increased reliability but also strengthened stakeholder confidence. Balancing the use of the client’s existing stack with carefully chosen improvements proved key to both adoption and long-term success.
