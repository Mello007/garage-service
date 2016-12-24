package ru.garage.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Client;
import ru.garage.entity.Dimensions;

@RepositoryRestResource(collectionResourceRel = "dimensions", path = "dimensions")
public interface DimensionsRepository extends PagingAndSortingRepository<Dimensions, Long> {

    @Transactional
    void deleteByLength(@Param("length") String length);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM dimensions", nativeQuery = true)
    void deleteAll();
}
