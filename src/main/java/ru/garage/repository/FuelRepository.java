package ru.garage.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Fuel;

@RepositoryRestResource(collectionResourceRel = "fuel", path = "fuel")
public interface FuelRepository extends PagingAndSortingRepository<Fuel, Long> {

    @Transactional
    void deleteByFuelName(@Param("fuelName") String fuelName);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM fuel", nativeQuery = true)
    void deleteAll();

}
